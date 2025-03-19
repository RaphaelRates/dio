export enum ContentType {
    // Tipos de texto
    TEXT_PLAIN = "text/plain",
    TEXT_HTML = "text/html",
    TEXT_CSS = "text/css",
    TEXT_CSV = "text/csv",
    TEXT_XML = "text/xml",

    // Tipos de aplicação
    JSON = "application/json",
    XML = "application/xml",
    XHTML_XML = "application/xhtml+xml",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    JAVASCRIPT = "application/javascript",
    OCTET_STREAM = "application/octet-stream",
    PDF = "application/pdf",
    ZIP = "application/zip",
    GZIP = "application/gzip",
    RTF = "application/rtf",
    SQL = "application/sql",
    GRAPHQL = "application/graphql",
    LD_JSON = "application/ld+json",
    MSWORD = "application/msword",
    EXCEL = "application/vnd.ms-excel",
    POWERPOINT = "application/vnd.ms-powerpoint",
    OPEN_DOCUMENT_TEXT = "application/vnd.oasis.opendocument.text",
    OPEN_DOCUMENT_SPREADSHEET = "application/vnd.oasis.opendocument.spreadsheet",
    OPEN_DOCUMENT_PRESENTATION = "application/vnd.oasis.opendocument.presentation",

    // Tipos de imagem
    IMAGE_PNG = "image/png",
    IMAGE_JPEG = "image/jpeg",
    IMAGE_GIF = "image/gif",
    IMAGE_SVG = "image/svg+xml",
    IMAGE_WEBP = "image/webp",
    IMAGE_BMP = "image/bmp",
    IMAGE_TIFF = "image/tiff",

    // Tipos de áudio e vídeo
    AUDIO_MPEG = "audio/mpeg",
    AUDIO_OGG = "audio/ogg",
    AUDIO_WAV = "audio/wav",
    VIDEO_MP4 = "video/mp4",
    VIDEO_MPEG = "video/mpeg",
    VIDEO_OGG = "video/ogg",
    VIDEO_WEBM = "video/webm",

    // Tipos multipart
    MULTIPART_FORM_DATA = "multipart/form-data",
    MULTIPART_BYTERANGES = "multipart/byteranges"
}