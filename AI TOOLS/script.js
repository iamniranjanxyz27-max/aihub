// ---------- Data ----------
const tools = [
  // Video tools (example with subcategory)
  { name: "Runway (Gen 4)", category: "Video", subcategory: "Video Editing", desc: "Generative AI video editing with advanced tools like scene generation, real-time collaboration, and cinematic effects.", url: "https://runwayml.com", price: "Paid" },
  { name: "Google Veo 3", category: "Video", subcategory: "Video Generation", desc: "Generates 8-second videos with audio from text prompts.", url: "https://cloud.google.com", price: "Paid" },
  { name: "OpenAI Sora", category: "Video", subcategory: "Video Generation", desc: "Generates short AI videos from text prompts; includes cameo feature for personalized content.", url: "https://openai.com", price: "Paid" },
  { name: "Adobe Premiere Pro (Generative Extend)", category: "Video", subcategory: "Video Editing", desc: "AI-powered tools for extending video clips and translating captions.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
  { name: "Descript", category: "Video", subcategory: "Video Editing", desc: "Text-based video editing, podcast editing, and screen recording.", url: "https://www.descript.com", price: "Freemium" },
  { name: "Synthesia", category: "Video", subcategory: "Animation", desc: "AI avatars for creating training and marketing videos.", url: "https://www.synthesia.io", price: "Paid" },
  { name: "CapCut", category: "Video", subcategory: "Video Editing", desc: "User-friendly video editing with AI-enhanced features.", url: "https://www.capcut.com", price: "Free" },
  { name: "Filmora by Wondershare", category: "Video", subcategory: "Video Editing", desc: "Cinematic video editing with AI tools and templates.", url: "https://filmora.wondershare.com", price: "Paid" },
  { name: "Opus Clip", category: "Video", subcategory: "Video Editing", desc: "Converts long videos into short, shareable clips using AI.", url: "https://www.opusclip.com", price: "Paid" },
  { name: "Veed.io", category: "Video", subcategory: "Video Editing", desc: "All-in-one editor with AI tools for subtitles, translations, and effects.", url: "https://www.veed.io", price: "Freemium" },
  { name: "HeyEddie.ai", category: "Video", subcategory: "Video Editing", desc: "AI assistant for rough cuts and interview editing.", url: "https://heyyeddie.ai", price: "Paid" },
  { name: "Spike Studio", category: "Video", subcategory: "Video Generation", desc: "Generates captivating short videos from longer ones using realistic AI technology.", url: "https://spikestudio.com", price: "Paid" },
  { name: "DomoAI", category: "Video", subcategory: "Video Generation", desc: "Offers smart preservation, realistic animation, and various styles.", url: "https://domo.ai", price: "Paid" },
  { name: "Hypernatural", category: "Video", subcategory: "Animation", desc: "Best for AI storytelling and narration.", url: "https://hypernatural.ai", price: "Paid" },
  { name: "InVideo", category: "Video", subcategory: "Video Generation", desc: "AI video creation for YouTube and marketing videos.", url: "https://invideo.io", price: "Freemium" },
  { name: "DeepBrain.AI", category: "Video", subcategory: "Video Generation", desc: "AI video generation with a focus on corporate and explainer videos.", url: "https://www.deepbrain.io", price: "Paid" },
  { name: "BasedLabs.AI", category: "Video", subcategory: "Animation", desc: "Voice cloning and custom AI avatars.", url: "https://basedlabs.ai", price: "Paid" },
  { name: "Pictory", category: "Video", subcategory: "Video Editing", desc: "AI video editing for marketers.", url: "https://pictory.ai", price: "Freemium" },
  { name: "Magisto", category: "Video", subcategory: "Video Editing", desc: "AI video editing with automated features.", url: "https://www.magisto.com", price: "Freemium" },
  { name: "Quik by GoPro", category: "Video", subcategory: "Video Editing", desc: "AI-powered video editing for action footage.", url: "https://gopro.com/en/us/shop/quik-app-video-photo-editor-desktop", price: "Freemium" },
  { name: "Animoto", category: "Video", subcategory: "Video Generation", desc: "AI video creation for social media.", url: "https://animoto.com", price: "Freemium" },
  { name: "Lumen5", category: "Video", subcategory: "Video Generation", desc: "AI video creation for marketing content.", url: "https://lumen5.com", price: "Freemium" },
  { name: "Promo.com", category: "Video", subcategory: "Video Generation", desc: "AI video creation for advertisements.", url: "https://promo.com", price: "Paid" },
  { name: "Wave.video", category: "Video", subcategory: "Video Editing", desc: "AI video editing with a focus on social media.", url: "https://wave.video", price: "Freemium" },
  { name: "Clipomatic", category: "Video", subcategory: "Video Editing", desc: "AI video editing with automatic captions.", url: "https://clipomatic.com", price: "Paid" },
  // ---------- Text Tools ----------
  { name: "ChatGPT (GPT-5)", category: "Text", subcategory: "Writing", desc: "Advanced conversational AI for content generation, coding assistance, and more.", url: "https://chat.openai.com", price: "Freemium" },
  { name: "Jasper", category: "Text", subcategory: "Writing", desc: "AI-powered writing assistant for blogs, ads, and social media content.", url: "https://www.jasper.ai", price: "Paid" },
  { name: "Copy.ai", category: "Text", subcategory: "Writing", desc: "Generates marketing copy, product descriptions, and more.", url: "https://www.copy.ai", price: "Freemium" },
  { name: "Writesonic", category: "Text", subcategory: "Writing", desc: "AI writer for blogs, ads, and landing pages.", url: "https://writesonic.com", price: "Freemium" },
  { name: "Anyword", category: "Text", subcategory: "Writing", desc: "Data-driven AI copywriting for marketers.", url: "https://anyword.com", price: "Paid" },
  { name: "Sudowrite", category: "Text", subcategory: "Writing", desc: "AI tool for fiction writers to enhance creativity.", url: "https://www.sudowrite.com", price: "Paid" },
  { name: "QuillBot", category: "Text", subcategory: "Writing", desc: "Paraphrasing, summarization, and grammar checking.", url: "https://quillbot.com", price: "Freemium" },
  { name: "Writer.com", category: "Text", subcategory: "Writing", desc: "AI writing assistant for businesses and teams.", url: "https://writer.com", price: "Paid" },
  { name: "Hypotenuse AI", category: "Text", subcategory: "Writing", desc: "AI content generation for e-commerce and product descriptions.", url: "https://hypotenuse.ai", price: "Paid" },
  { name: "YouBooks", category: "Text", subcategory: "Writing", desc: "AI-powered non-fiction book generator.", url: "https://youbooks.com", price: "Paid" },

  // Chatbots
  { name: "ChatGPT", category: "Text", subcategory: "Chatbots", desc: "Conversational AI for various applications.", url: "https://chat.openai.com", price: "Freemium" },
  { name: "Claude (Anthropic)", category: "Text", subcategory: "Chatbots", desc: "AI chatbot with a focus on safety and usability.", url: "https://www.anthropic.com/claude", price: "Freemium" },
  { name: "Google Gemini", category: "Text", subcategory: "Chatbots", desc: "Conversational AI integrated with Google services.", url: "https://gemini.google.com", price: "Freemium" },
  { name: "Perplexity AI", category: "Text", subcategory: "Chatbots", desc: "AI-powered browser with integrated assistant.", url: "https://www.perplexity.ai", price: "Freemium" },
  { name: "DeepSeek", category: "Text", subcategory: "Chatbots", desc: "Open-source reasoning AI chatbot.", url: "https://deepseek.io", price: "Free" },
  { name: "Dialogflow (Google Cloud)", category: "Text", subcategory: "Chatbots", desc: "Develop conversational interfaces for websites and apps.", url: "https://cloud.google.com/dialogflow", price: "Freemium" },
  { name: "Botpress", category: "Text", subcategory: "Chatbots", desc: "Open-source conversational AI platform.", url: "https://botpress.com", price: "Freemium" },
  { name: "Tidio", category: "Text", subcategory: "Chatbots", desc: "Live chat and chatbot solution for websites.", url: "https://www.tidio.com", price: "Freemium" },
  { name: "Smartsupp", category: "Text", subcategory: "Chatbots", desc: "Live chat with video recordings and chatbot capabilities.", url: "https://www.smartsupp.com", price: "Freemium" },
  { name: "HubSpot Chatbot Builder", category: "Text", subcategory: "Chatbots", desc: "Create bots for lead generation and customer support.", url: "https://www.hubspot.com/products/crm/chatbot-builder", price: "Freemium" },

  // Summarization
  { name: "Jasper AI", category: "Text", subcategory: "Summarization", desc: "Summarizes long texts into concise summaries.", url: "https://www.jasper.ai", price: "Paid" },
  { name: "QuillBot", category: "Text", subcategory: "Summarization", desc: "Paraphrasing and summarization tool.", url: "https://quillbot.com", price: "Freemium" },
  { name: "2ThePoint", category: "Text", subcategory: "Summarization", desc: "Summarizes articles with a single click.", url: "https://2thepoint.com", price: "Free" },
  { name: "Summarizer.org", category: "Text", subcategory: "Summarization", desc: "Summarizes articles and essays; offers bullet points and best lines.", url: "https://summarizer.org", price: "Free" },
  { name: "ZeroGPT", category: "Text", subcategory: "Summarization", desc: "Summarizes text while maintaining context.", url: "https://www.zerogpt.com", price: "Freemium" },
    // Translation
  { name: "Google Translate", category: "Text", subcategory: "Translation", desc: "Real-time text and speech translation in 100+ languages.", url: "https://translate.google.com", price: "Free" },
  { name: "DeepL", category: "Text", subcategory: "Translation", desc: "AI-powered translations with superior accuracy, formal/informal tone options.", url: "https://www.deepl.com", price: "Freemium" },
  { name: "Microsoft Translator", category: "Text", subcategory: "Translation", desc: "Text, speech, and document translation; integrates with Office apps.", url: "https://translator.microsoft.com", price: "Free" },
  { name: "Amazon Translate", category: "Text", subcategory: "Translation", desc: "Neural machine translation for real-time applications.", url: "https://aws.amazon.com/translate", price: "Paid" },
  { name: "Reverso", category: "Text", subcategory: "Translation", desc: "AI translation with contextual examples and language learning tools.", url: "https://www.reverso.net", price: "Freemium" },
  { name: "Linguee", category: "Text", subcategory: "Translation", desc: "Translation with context-based dictionary and example sentences.", url: "https://www.linguee.com", price: "Free" },
  { name: "Mate Translate", category: "Text", subcategory: "Translation", desc: "Browser and app-based translation with offline support.", url: "https://www.gikken.co/mate-translate/", price: "Freemium" },
  { name: "iTranslate", category: "Text", subcategory: "Translation", desc: "Text, voice, and offline translation.", url: "https://www.itranslate.com", price: "Freemium" },
  { name: "SYSTRAN Translate", category: "Text", subcategory: "Translation", desc: "AI translation for professional/business documents and APIs.", url: "https://www.systransoft.com", price: "Paid" },
  { name: "PROMT Online Translator", category: "Text", subcategory: "Translation", desc: "AI-based translation with dictionary and customizable settings.", url: "https://www.promt.com/online-translator", price: "Freemium" },
  { name: "DeepL Write (AI-enhanced)", category: "Text", subcategory: "Translation", desc: "Not just translation but also rewriting and polishing translations for natural language.", url: "https://www.deepl.com/write", price: "Freemium" },
  { name: "Papago (Naver)", category: "Text", subcategory: "Translation", desc: "Real-time translation with text, voice, and image support (strong for Asian languages).", url: "https://papago.naver.com", price: "Free" },
  { name: "Smartling", category: "Text", subcategory: "Translation", desc: "Enterprise-level AI translation for websites, apps, and content localization.", url: "https://www.smartling.com", price: "Paid" },
  { name: "Lilt", category: "Text", subcategory: "Translation", desc: "AI-assisted translation platform for enterprises with human-in-the-loop editing.", url: "https://lilt.com", price: "Paid" },
  { name: "Unbabel", category: "Text", subcategory: "Translation", desc: "Combines AI translation with human post-editing for professional-quality output.", url: "https://unbabel.com", price: "Paid" },
  // AI Art
  { name: "Midjourney", category: "Image", subcategory: "AI Art", desc: "Generates highly artistic and surreal images from text prompts.", url: "https://www.midjourney.com", price: "Paid" },
  { name: "DALL·E 3 (via ChatGPT)", category: "Image", subcategory: "AI Art", desc: "Creates detailed images from textual descriptions, integrated with ChatGPT for refined prompts.", url: "https://openai.com/dall-e", price: "Freemium" },
  { name: "Stable Diffusion", category: "Image", subcategory: "AI Art", desc: "Customizable AI model for generating images from text prompts.", url: "https://stability.ai", price: "Open Source" },
  { name: "Runway ML", category: "Image", subcategory: "AI Art", desc: "Offers various AI tools for creatives, including image generation and editing.", url: "https://runwayml.com", price: "Freemium" },
  { name: "Artbreeder", category: "Image", subcategory: "AI Art", desc: "Generates and blends images using AI, focusing on portraits and landscapes.", url: "https://www.artbreeder.com", price: "Freemium" },
  { name: "Deep Dream Generator", category: "Image", subcategory: "AI Art", desc: "Transforms photos into dream-like images using neural networks.", url: "https://deepdreamgenerator.com", price: "Freemium" },
  { name: "NightCafe Studio", category: "Image", subcategory: "AI Art", desc: "Generates artworks from text prompts with various styles.", url: "https://creator.nightcafe.studio", price: "Freemium" },
  { name: "DeepAI", category: "Image", subcategory: "AI Art", desc: "Provides an API for generating images from text descriptions.", url: "https://deepai.org", price: "Freemium" },
  { name: "Craiyon", category: "Image", subcategory: "AI Art", desc: "Generates images from text prompts using a lighter version of DALL·E.", url: "https://www.craiyon.com", price: "Free" },
  { name: "StarryAI", category: "Image", subcategory: "AI Art", desc: "Generates artworks from text prompts with options for style and medium.", url: "https://www.starryai.com", price: "Freemium" },

  // Generative Art
  { name: "Processing", category: "Image", subcategory: "Generative Art", desc: "A flexible software sketchbook and a language for coding within visual arts.", url: "https://processing.org", price: "Open Source" },
  { name: "P5.js", category: "Image", subcategory: "Generative Art", desc: "JavaScript library for coding accessible for artists, designers, educators, and beginners.", url: "https://p5js.org", price: "Open Source" },
  { name: "GANPaint Studio", category: "Image", subcategory: "Generative Art", desc: "Allows users to edit images using a generative adversarial network.", url: "https://ganpaint.io", price: "Free" },
  { name: "Google DeepDream", category: "Image", subcategory: "Generative Art", desc: "Enhances and modifies images to create dream-like, surreal effects.", url: "https://deepdreamgenerator.com", price: "Free" },
  { name: "VQGAN+CLIP", category: "Image", subcategory: "Generative Art", desc: "Generates images from textual descriptions using VQGAN and CLIP models.", url: "https://github.com/CompVis/taming-transformers", price: "Open Source" },
  { name: "Dream by Wombo", category: "Image", subcategory: "Generative Art", desc: "Generates artworks from text prompts with various styles.", url: "https://dream.ai", price: "Freemium" },
  { name: "Playform IO", category: "Image", subcategory: "Generative Art", desc: "Offers AI tools for artists to create generative art.", url: "https://playform.io", price: "Freemium" },

  // Photo Editing / Design
  { name: "Adobe Photoshop", category: "Image", subcategory: "Photo Editing", desc: "Industry-standard photo editing with AI-powered tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
  { name: "Luminar Neo", category: "Image", subcategory: "Photo Editing", desc: "AI-powered photo editor with tools for enhancing images.", url: "https://skylum.com/luminar", price: "Paid" },
  { name: "Canva", category: "Image", subcategory: "Design", desc: "Design tool with AI-powered photo editing features.", url: "https://www.canva.com", price: "Freemium" },
  { name: "Pixlr", category: "Image", subcategory: "Photo Editing", desc: "Online photo editor with AI tools.", url: "https://pixlr.com", price: "Freemium" },
  { name: "Fotor", category: "Image", subcategory: "Photo Editing", desc: "Online photo editor with AI tools.", url: "https://www.fotor.com", price: "Freemium" },
   // Music
  { name: "Ecrett Music", category: "Audio", subcategory: "Music", desc: "Background music generator.", url: "https://ecrettmusic.com", price: "Paid" },
  { name: "Amper Music", category: "Audio", subcategory: "Music", desc: "AI-generated music for media.", url: "https://www.ampermusic.com", price: "Paid" },
  { name: "Jukedeck", category: "Audio", subcategory: "Music", desc: "AI music for videos.", url: "https://www.jukedeck.com", price: "Freemium" },
  { name: "Endlesss", category: "Audio", subcategory: "Music", desc: "Collaborative AI music creation.", url: "https://endlesss.fm", price: "Freemium" },
  { name: "Loudly", category: "Audio", subcategory: "Music", desc: "AI music production platform.", url: "https://www.loudly.com", price: "Freemium" },
  { name: "Suno Studio", category: "Audio", subcategory: "Music", desc: "Blends AI music generation with interactive editing.", url: "https://suno.ai", price: "Paid" },
  { name: "Udio", category: "Audio", subcategory: "Music", desc: "Generates music based on text prompts.", url: "https://udio.io", price: "Freemium" },
  { name: "Boomy", category: "Audio", subcategory: "Music", desc: "Create AI music tracks quickly.", url: "https://boomy.com", price: "Freemium" },
  { name: "Play.ht", category: "Audio", subcategory: "Music", desc: "Text-to-speech with various voice options.", url: "https://play.ht", price: "Freemium" },
  { name: "Soundraw", category: "Audio", subcategory: "Music", desc: "AI music composition platform.", url: "https://soundraw.io", price: "Freemium" },

  // Voice / TTS
  { name: "ElevenLabs", category: "Audio", subcategory: "Voice / TTS", desc: "Lifelike voice synthesis with large multilingual voice library.", url: "https://elevenlabs.io", price: "Freemium" },
  { name: "Hume", category: "Audio", subcategory: "Voice / TTS", desc: "Designs voices from text prompts with emotional nuance.", url: "https://www.hume.ai", price: "Freemium" },
  { name: "Speechify", category: "Audio", subcategory: "Voice / TTS", desc: "Converts text to speech with human-like cadence.", url: "https://speechify.com", price: "Freemium" },
  { name: "WellSaid", category: "Audio", subcategory: "Voice / TTS", desc: "Word-by-word control for voice synthesis.", url: "https://wellsaidlabs.com", price: "Paid" },
  { name: "DupDub", category: "Audio", subcategory: "Voice / TTS", desc: "Multilingual phoneme-level voice control.", url: "https://www.dupdub.com", price: "Paid" },
  { name: "Respeecher", category: "Audio", subcategory: "Voice / TTS", desc: "Creates engaging speech variations.", url: "https://www.respeecher.com", price: "Paid" },
  { name: "Altered", category: "Audio", subcategory: "Voice / TTS", desc: "Advanced voice creation and editing controls.", url: "https://www.altered.ai", price: "Paid" },
  { name: "Murf", category: "Audio", subcategory: "Voice / TTS", desc: "Allows emphasis control in voice synthesis.", url: "https://murf.ai", price: "Freemium" },
  { name: "TTSMaker", category: "Audio", subcategory: "Voice / TTS", desc: "Free AI voice generator.", url: "https://ttsmaker.com", price: "Free" },
  { name: "Typecast", category: "Audio", subcategory: "Voice / TTS", desc: "Emotionally expressive TTS with avatar generation.", url: "https://www.typecast.ai", price: "Freemium" },

  // Sound Effects
  { name: "Fiverr Audio Services", category: "Audio", subcategory: "Sound Effects", desc: "Marketplace for AI audio editing services.", url: "https://www.fiverr.com/categories/music-audio", price: "Freemium" },
  { name: "Descript Audio", category: "Audio", subcategory: "Sound Effects", desc: "Podcast and video editing with AI tools.", url: "https://www.descript.com", price: "Freemium" },
  { name: "Adobe Podcast", category: "Audio", subcategory: "Sound Effects", desc: "Professional-grade audio cleanup.", url: "https://podcast.adobe.com", price: "Free" },
  { name: "Auphonic", category: "Audio", subcategory: "Sound Effects", desc: "Audio processing and mastering tools.", url: "https://auphonic.com", price: "Freemium" },
  { name: "Lalamo Studio", category: "Audio", subcategory: "Sound Effects", desc: "AI-driven audio editing tools.", url: "https://www.lalamo.ai", price: "Freemium" },
    // Photo Editing
  { name: "Adobe Photoshop", category: "Editing", subcategory: "Photo Editing", desc: "Industry-standard photo editing with AI-powered tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
  { name: "Luminar Neo", category: "Editing", subcategory: "Photo Editing", desc: "AI-powered photo editor with sky replacement & portrait enhancements.", url: "https://skylum.com/luminar", price: "Paid" },
  { name: "Canva", category: "Editing", subcategory: "Photo Editing", desc: "Design tool with AI-powered photo editing features.", url: "https://www.canva.com", price: "Freemium" },
  { name: "Pixlr", category: "Editing", subcategory: "Photo Editing", desc: "Online photo editor with AI tools.", url: "https://pixlr.com", price: "Freemium" },
  { name: "Fotor", category: "Editing", subcategory: "Photo Editing", desc: "AI photo editor with enhancements & effects.", url: "https://www.fotor.com", price: "Freemium" },
  { name: "BeFunky", category: "Editing", subcategory: "Photo Editing", desc: "Artistic filters & AI editing.", url: "https://www.befunky.com", price: "Freemium" },
  { name: "Lensa", category: "Editing", subcategory: "Photo Editing", desc: "AI portrait and selfie enhancements.", url: "https://www.lensa-ai.com", price: "Freemium" },
  { name: "AI Ease", category: "Editing", subcategory: "Photo Editing", desc: "All-in-one AI photo editor for object & background editing.", url: "https://aiease.com", price: "Free" },
  { name: "Photolemur", category: "Editing", subcategory: "Photo Editing", desc: "Automatic photo enhancement using AI.", url: "https://photolemur.com", price: "Paid" },
  { name: "ON1 Photo RAW", category: "Editing", subcategory: "Photo Editing", desc: "Professional photo editor with AI tools.", url: "https://www.on1.com/products/photo-raw/", price: "Paid" },

  // Video Editing
  { name: "Adobe Premiere Pro", category: "Editing", subcategory: "Video Editing", desc: "Professional video editing with AI features.", url: "https://www.adobe.com/products/premiere.html", price: "Paid" },
  { name: "DaVinci Resolve", category: "Editing", subcategory: "Video Editing", desc: "AI-assisted video editing.", url: "https://www.blackmagicdesign.com/products/davinciresolve/", price: "Freemium" },
  { name: "Runway", category: "Editing", subcategory: "Video Editing", desc: "AI video editing & generation.", url: "https://runwayml.com", price: "Freemium" },
  { name: "Descript", category: "Editing", subcategory: "Video Editing", desc: "AI video editing with transcription & overdub.", url: "https://www.descript.com", price: "Freemium" },
  { name: "Wondershare Filmora", category: "Editing", subcategory: "Video Editing", desc: "User-friendly AI video editing.", url: "https://filmora.wondershare.com", price: "Paid" },
  { name: "Capsule", category: "Editing", subcategory: "Video Editing", desc: "AI video editing & production.", url: "https://www.capsule.ai", price: "Freemium" },
  { name: "InVideo", category: "Editing", subcategory: "Video Editing", desc: "AI video creation for social media.", url: "https://invideo.io", price: "Freemium" },
  { name: "Synthesia", category: "Editing", subcategory: "Video Editing", desc: "AI video generation with digital avatars.", url: "https://www.synthesia.io", price: "Paid" },
  { name: "Lumen5", category: "Editing", subcategory: "Video Editing", desc: "AI video creation for marketers.", url: "https://lumen5.com", price: "Freemium" },
  { name: "YouCam Video", category: "Editing", subcategory: "Video Editing", desc: "AI-powered video editing.", url: "https://www.perfectcorp.com/consumer/apps/youcam-video", price: "Freemium" },

  // Background Removal
  { name: "Remove.bg", category: "Editing", subcategory: "Background Removal", desc: "Instant AI background removal.", url: "https://www.remove.bg", price: "Freemium" },
  { name: "PhotoRoom", category: "Editing", subcategory: "Background Removal", desc: "AI background removal & editing.", url: "https://www.photoroom.com", price: "Freemium" },
  { name: "Canva Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Design tool with AI background remover.", url: "https://www.canva.com/features/background-remover/", price: "Freemium" },
  { name: "Photoshop Background Remover", category: "Editing", subcategory: "Background Removal", desc: "Professional AI background removal tools.", url: "https://www.adobe.com/products/photoshop.html", price: "Paid" },
  { name: "Aiarty Image Matting", category: "Editing", subcategory: "Background Removal", desc: "Advanced AI background removal.", url: "https://www.aiarty.com", price: "Paid" },
 // Code / Programming AI
  { name: "GitHub Copilot", category: "Code", subcategory: "Code / Programming AI", desc: "AI code completion and suggestions.", url: "https://github.com/features/copilot", price: "Paid" },
  { name: "Tabnine", category: "Code", subcategory: "Code / Programming AI", desc: "AI code assistant for multiple languages.", url: "https://www.tabnine.com", price: "Freemium" },
  { name: "CodeT5", category: "Code", subcategory: "Code / Programming AI", desc: "Open-source AI code generation model.", url: "https://github.com/salesforce/CodeT5", price: "Free" },
  { name: "Replit Ghostwriter", category: "Code", subcategory: "Code / Programming AI", desc: "AI coding assistant integrated in Replit.", url: "https://replit.com/site/ghostwriter", price: "Paid" },
  { name: "Kite", category: "Code", subcategory: "Code / Programming AI", desc: "AI-powered code completions.", url: "https://www.kite.com", price: "Free" },
  { name: "Codex (OpenAI)", category: "Code", subcategory: "Code / Programming AI", desc: "Code generation from natural language prompts.", url: "https://openai.com/blog/openai-codex", price: "Paid" },
  { name: "MutableAI", category: "Code", subcategory: "Code / Programming AI", desc: "AI-assisted code refactoring and optimization.", url: "https://mutable.ai", price: "Paid" },

  // Data Analysis / AI Analytics
  { name: "DataRobot", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "Automated machine learning platform for predictive modeling.", url: "https://www.datarobot.com", price: "Paid" },
  { name: "H2O.ai", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "Open-source AI/ML platform for data analysis.", url: "https://www.h2o.ai", price: "Freemium" },
  { name: "Google Cloud AI Platform", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI/ML platform for data analytics and model deployment.", url: "https://cloud.google.com/ai-platform", price: "Paid" },
  { name: "RapidMiner", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-powered data science and analytics platform.", url: "https://rapidminer.com", price: "Freemium" },
  { name: "MonkeyLearn", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI text analysis and sentiment analysis.", url: "https://monkeylearn.com", price: "Freemium" },
  { name: "Tableau AI / Einstein Analytics (Salesforce)", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "AI-driven analytics for business intelligence.", url: "https://www.tableau.com", price: "Paid" },
  { name: "PandasAI", category: "Code", subcategory: "Data Analysis / AI Analytics", desc: "Python library integrating AI into Pandas for data analysis.", url: "https://github.com/gventuri/pandas-ai", price: "Free" },

  // Productivity / Task Automation
  { name: "Zapier AI", category: "Code", subcategory: "Productivity / Task Automation", desc: "Automates workflows with AI triggers and actions.", url: "https://zapier.com/ai", price: "Freemium" },
  { name: "Make (Integromat)", category: "Code", subcategory: "Productivity / Task Automation", desc: "Workflow automation with AI integration.", url: "https://www.make.com", price: "Freemium" },
  { name: "Tome AI", category: "Code", subcategory: "Productivity / Task Automation", desc: "AI-assisted presentation and storytelling tool.", url: "https://tome.app", price: "Freemium" },
  { name: "Notion AI", category: "Code", subcategory: "Productivity / Task Automation", desc: "AI-powered note-taking, summarization, and productivity.", url: "https://www.notion.so/product/ai", price: "Freemium" },
  { name: "ClickUp AI", category: "Code", subcategory: "Productivity / Task Automation", desc: "AI task automation and project management.", url: "https://clickup.com/ai", price: "Freemium" },
  { name: "Motion AI", category: "Code", subcategory: "Productivity / Task Automation", desc: "AI-driven productivity and scheduling tool.", url: "https://www.usemotion.com", price: "Paid" },

  // AI Research Tools
  { name: "Semantic Scholar", category: "Code", subcategory: "AI Research Tools", desc: "AI-driven academic research search engine.", url: "https://www.semanticscholar.org", price: "Free" },
  { name: "Elicit.org", category: "Code", subcategory: "AI Research Tools", desc: "AI research assistant for literature review.", url: "https://elicit.org", price: "Freemium" },
  { name: "Scite", category: "Code", subcategory: "AI Research Tools", desc: "AI-powered citation and research evaluation tool.", url: "https://scite.ai", price: "Freemium" },
  { name: "Research Rabbit", category: "Code", subcategory: "AI Research Tools", desc: "AI tool to explore and visualize research papers.", url: "https://www.researchrabbit.ai", price: "Freemium" },
  { name: "Connected Papers", category: "Code", subcategory: "AI Research Tools", desc: "AI-driven visual tool for discovering related research.", url: "https://www.connectedpapers.com", price: "Free" }
];

// ---------- Subcategories ----------
const subcategories = {
  "Video": ["Video Generation", "Animation", "Video Editing"],
  "Text": ["Writing", "Chatbots", "Summarization", "Translation"],
  "Image": ["AI Art", "Generative Art", "Photo Editing", "Design"],
  "Audio": ["Music", "Voice / TTS", "Sound Effects"],
  "Editing": ["Photo Editing", "Video Editing", "Background Removal"],
  "Code": ["Code / Programming AI", "Data Analysis / AI Analytics" , "Productivity / Task Automation" ,"AI Research Tools"]
};

// ---------- UI Elements ----------
const cards = document.getElementById('cards');
const search = document.getElementById('search');
const mainBtns = Array.from(document.querySelectorAll('.main-btn'));
const subcatsDiv = document.getElementById('subcats');
const countEl = document.getElementById('count');

let activeMainCat = 'All';
let activeSubCat = 'All';

// ---------- Helper ----------
function escapeHtml(s){
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function makeCard(tool){
  const div = document.createElement('article');
  div.className = 'card';
  div.tabIndex = 0;
  div.innerHTML = `
    <div>
      <h3>${escapeHtml(tool.name)}</h3>
      <p>${escapeHtml(tool.desc)}</p>
    </div>
    <div class="row">
      <div style="display:flex;gap:10px;align-items:center">
        <span class="badge">${escapeHtml(tool.category)}</span>
        <span class="price">${escapeHtml(tool.price)}</span>
      </div>
      <div>
        <a class="visit" href="${tool.url}" target="_blank" rel="noopener noreferrer">Visit</a>
      </div>
    </div>
  `;
  div.addEventListener('click', e => { if(!e.target.closest('a')) window.open(tool.url,'_blank','noopener'); });
  return div;
}

function renderList(list){
  cards.innerHTML = '';
  if(!list.length){
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = 'No tools found — try another search or category.';
    cards.appendChild(empty);
  } else {
    const frag = document.createDocumentFragment();
    list.forEach(t => frag.appendChild(makeCard(t)));
    cards.appendChild(frag);
  }
  countEl.textContent = `${list.length} tool${list.length===1?'':'s'}`;
}

// ---------- Render subcategories ----------
function renderSubcats(mainCat){
  subcatsDiv.innerHTML = '';
  activeSubCat = 'All';
  if(subcategories[mainCat]){
    const allBtn = document.createElement('button');
    allBtn.className = 'subcat-btn active';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => { activeSubCat='All'; updateActiveSubcat(allBtn); filterTools(); });
    subcatsDiv.appendChild(allBtn);

    subcategories[mainCat].forEach(sub => {
      const btn = document.createElement('button');
      btn.className = 'subcat-btn';
      btn.textContent = sub;
      btn.addEventListener('click', () => { activeSubCat=sub; updateActiveSubcat(btn); filterTools(); });
      subcatsDiv.appendChild(btn);
    });
  }
}

function updateActiveSubcat(btn){
  document.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ---------- Filter tools ----------
function filterTools(){
  const q = search.value.trim().toLowerCase();
  const filtered = tools.filter(t => {
    const matchMain = (activeMainCat==='All') || (t.category===activeMainCat);
    const matchSub = (activeSubCat==='All') || (t.subcategory===activeSubCat);
    const matchSearch = !q || (t.name + ' ' + t.desc + ' ' + t.category + ' ' + t.price).toLowerCase().includes(q);
    return matchMain && matchSub && matchSearch;
  });
  renderList(filtered);
}

// ---------- Main category clicks ----------
mainBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    mainBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeMainCat = btn.dataset.cat;
    renderSubcats(activeMainCat);
    filterTools();
  });
});

// ---------- Search input ----------
let debounceTimer = null;
search.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filterTools, 120);
});

// ---------- Keyboard "/" focus ----------
window.addEventListener('keydown', e => {
  if(e.key === '/' && document.activeElement !== search){
    e.preventDefault();
    search.focus();
  }
});

// ---------- Initial render ----------
renderSubcats(activeMainCat);
renderList(tools);
