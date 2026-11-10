// Narração com o Gemini (texto -> voz). Tenta vários modelos; devolve null se todos falharem.
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models'
const MODELS = ['gemini-3.8-flash-tts', 'gemini-3.1-flash-tts-preview', 'gemini-2.5-flash-preview-tts']

export async function synthesizeSpeech(text, { apiKey, voice = 'Kore' } = {}) {
  if (!apiKey) return null
  const models = [...new Set([process.env.GEMINI_TTS_MODEL, ...MODELS].filter(Boolean))]
  const failures = []

  for (const model of models) {
    try {
      const response = await fetch(`${ENDPOINT}/${model}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({
          // Só o texto a ser falado: instruções de estilo aqui seriam lidas em voz alta.
          contents: [{ parts: [{ text }] }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
          },
        }),
        signal: AbortSignal.timeout(60_000),
      })
      const data = await response.json().catch(() => ({}))
      const audio = data?.candidates?.[0]?.content?.parts?.find((part) => part.inlineData)?.inlineData
      if (!response.ok || !audio?.data) throw new Error(`${response.status} ${data?.error?.message ?? 'sem áudio'}`.slice(0, 120))
      return { base64: audio.data, mimeType: audio.mimeType || 'audio/L16;rate=24000', model }
    } catch (error) {
      failures.push(`${model}: ${error instanceof Error ? error.message : error}`)
    }
  }

  console.warn(`[aviso] Narração indisponível, vídeo sairá sem voz. ${failures.join(' | ')}`)
  return null
}
