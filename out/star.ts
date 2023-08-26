/* Telegram API wrapper for Javascript
  By MinecraftPublisher
  Auto-Scraped from https://core.telegram.org/bots/api
  */

import './star.types.ts'

async function Test<T>(method: string, res: API<T>): Promise<T> {
    if(res.ok) return res.data
    else {
        throw ('[ERROR] Critical eror at method ' + method + ' error: ' + res.error)
    }
}

const build = ((token: string) => {
    let BASE = `https://api.telegram.org/bot${token}/`

    /**
* Makes an HTTP GET request to the Telegram Bot API.
*/

let get = async function(url: string, args: { [key: string]: any } = {}): Promise<API<any>> {
    let keys = Object.keys(args)?.filter(e => !!args[e])?.map((e) => {
        let value

        if (typeof args[e] === 'string') value = args[e]
        else encodeURI(JSON.stringify(args[e]))

        return `${e}=${value}`
    })

    return await fetch(`${BASE}${url}?` + keys?.join('&')).then((res) => res.json())
}

async function login(token: string): Promise<void> {
    BASE += `${token}/`
}

    const setGet = ((func: typeof get) => {
        get = func
    })

        /**
     * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
     * 
     * Read more: https://core.telegram.org/bots/api#getupdates
     * @param {string | number} offset Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
     * @param {string | number} limit Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     * @param {string | number} timeout Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
     * @param {Array<string>} allowed_updates A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
     * @returns {Promise<Array<Update>>}
     */
    async function getUpdates(
        offset?: string | number,
        limit?: string | number,
        timeout?: string | number,
        allowed_updates?: Array<string>
    ): Promise<Array<Update>> {
        return await Test('getUpdates', await get('getUpdates', {
            offset,
            limit,
            timeout,
            allowed_updates
        }))
    }
    
    /**
     * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
     * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header "X-Telegram-Bot-Api-Secret-Token" with the secret token as content.
     * 
     * Read more: https://core.telegram.org/bots/api#setwebhook
     * @param {string} url HTTPS URL to send updates to. Use an empty string to remove webhook integration
     * @param {InputFile} certificate Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
     * @param {string} ip_address The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
     * @param {string | number} max_connections The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
     * @param {Array<string>} allowed_updates A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
     * @param {boolean} drop_pending_updates Pass True to drop all pending updates
     * @param {string} secret_token A secret token to be sent in a header "X-Telegram-Bot-Api-Secret-Token" in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
     * @returns {Promise<boolean>}
     */
    async function setWebhook(
        url: string,
        certificate?: InputFile,
        ip_address?: string,
        max_connections?: string | number,
        allowed_updates?: Array<string>,
        drop_pending_updates?: boolean,
        secret_token?: string
    ): Promise<boolean> {
        return await Test('setWebhook', await get('setWebhook', {
            url,
            certificate,
            ip_address,
            max_connections,
            allowed_updates,
            drop_pending_updates,
            secret_token
        }))
    }
    
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletewebhook
     * @param {boolean} drop_pending_updates Pass True to drop all pending updates
     * @returns {Promise<boolean>}
     */
    async function deleteWebhook(
        drop_pending_updates?: boolean
    ): Promise<boolean> {
        return await Test('deleteWebhook', await get('deleteWebhook', {
            drop_pending_updates
        }))
    }
    
    /**
     * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
     * 
     * Read more: https://core.telegram.org/bots/api#getwebhookinfo * @returns {Promise<WebhookInfo>}
     */
    async function getWebhookInfo(): Promise<WebhookInfo> {
        return await Test('getWebhookInfo', await get('getWebhookInfo', {
            
        }))
    }
    
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
     * 
     * Read more: https://core.telegram.org/bots/api#getme * @returns {Promise<User>}
     */
    async function getMe(): Promise<User> {
        return await Test('getMe', await get('getMe', {
            
        }))
    }
    
    /**
     * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
     * 
     * Read more: https://core.telegram.org/bots/api#logout * @returns {Promise<boolean>}
     */
    async function logOut(): Promise<boolean> {
        return await Test('logOut', await get('logOut', {
            
        }))
    }
    
    /**
     * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
     * 
     * Read more: https://core.telegram.org/bots/api#close * @returns {Promise<boolean>}
     */
    async function close(): Promise<boolean> {
        return await Test('close', await get('close', {
            
        }))
    }
    
    /**
     * Use this method to send text messages. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendmessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} text Text of the message to be sent, 1-4096 characters after entities parsing
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} parse_mode Mode for parsing entities in the message text. See formatting options for more details.
     * @param {Array<MessageEntity>} entities A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
     * @param {boolean} disable_web_page_preview Disables link previews for links in this message
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendMessage(
        chat_id: string | number,
        text: string,
        message_thread_id?: string | number,
        parse_mode?: string,
        entities?: Array<MessageEntity>,
        disable_web_page_preview?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendMessage', await get('sendMessage', {
            chat_id,
            text,
            message_thread_id,
            parse_mode,
            entities,
            disable_web_page_preview,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#forwardmessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number | string} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
     * @param {string | number} message_id Message identifier in the chat specified in from_chat_id
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the forwarded message from forwarding and saving
     * @returns {Promise<Message>}
     */
    async function forwardMessage(
        chat_id: string | number,
        from_chat_id: string | number,
        message_id: string | number,
        message_thread_id?: string | number,
        disable_notification?: boolean,
        protect_content?: boolean
    ): Promise<Message> {
        return await Test('forwardMessage', await get('forwardMessage', {
            chat_id,
            from_chat_id,
            message_id,
            message_thread_id,
            disable_notification,
            protect_content
        }))
    }
    
    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
     * 
     * Read more: https://core.telegram.org/bots/api#copymessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number | string} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
     * @param {string | number} message_id Message identifier in the chat specified in from_chat_id
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} caption New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
     * @param {string} parse_mode Mode for parsing entities in the new caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<MessageId>}
     */
    async function copyMessage(
        chat_id: string | number,
        from_chat_id: string | number,
        message_id: string | number,
        message_thread_id?: string | number,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<MessageId> {
        return await Test('copyMessage', await get('copyMessage', {
            chat_id,
            from_chat_id,
            message_id,
            message_thread_id,
            caption,
            parse_mode,
            caption_entities,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send photos. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendphoto
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} photo Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} caption Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the photo caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {boolean} has_spoiler Pass True if the photo needs to be covered with a spoiler animation
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendPhoto(
        chat_id: string | number,
        photo: InputFile | string,
        message_thread_id?: string | number,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        has_spoiler?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendPhoto', await get('sendPhoto', {
            chat_id,
            photo,
            message_thread_id,
            caption,
            parse_mode,
            caption_entities,
            has_spoiler,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
     * For sending voice messages, use the sendVoice method instead.
     * 
     * Read more: https://core.telegram.org/bots/api#sendaudio
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} audio Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} caption Audio caption, 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the audio caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {string | number} duration Duration of the audio in seconds
     * @param {string} performer Performer
     * @param {string} title Track name
     * @param {InputFile | string} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendAudio(
        chat_id: string | number,
        audio: InputFile | string,
        message_thread_id?: string | number,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        duration?: string | number,
        performer?: string,
        title?: string,
        thumbnail?: InputFile | string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendAudio', await get('sendAudio', {
            chat_id,
            audio,
            message_thread_id,
            caption,
            parse_mode,
            caption_entities,
            duration,
            performer,
            title,
            thumbnail,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
     * 
     * Read more: https://core.telegram.org/bots/api#senddocument
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} document File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {InputFile | string} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string} caption Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the document caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {boolean} disable_content_type_detection Disables automatic server-side content type detection for files uploaded using multipart/form-data
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendDocument(
        chat_id: string | number,
        document: InputFile | string,
        message_thread_id?: string | number,
        thumbnail?: InputFile | string,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        disable_content_type_detection?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendDocument', await get('sendDocument', {
            chat_id,
            document,
            message_thread_id,
            thumbnail,
            caption,
            parse_mode,
            caption_entities,
            disable_content_type_detection,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
     * 
     * Read more: https://core.telegram.org/bots/api#sendvideo
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} video Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string | number} duration Duration of sent video in seconds
     * @param {string | number} width Video width
     * @param {string | number} height Video height
     * @param {InputFile | string} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string} caption Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the video caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {boolean} has_spoiler Pass True if the video needs to be covered with a spoiler animation
     * @param {boolean} supports_streaming Pass True if the uploaded video is suitable for streaming
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendVideo(
        chat_id: string | number,
        video: InputFile | string,
        message_thread_id?: string | number,
        duration?: string | number,
        width?: string | number,
        height?: string | number,
        thumbnail?: InputFile | string,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        has_spoiler?: boolean,
        supports_streaming?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendVideo', await get('sendVideo', {
            chat_id,
            video,
            message_thread_id,
            duration,
            width,
            height,
            thumbnail,
            caption,
            parse_mode,
            caption_entities,
            has_spoiler,
            supports_streaming,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
     * 
     * Read more: https://core.telegram.org/bots/api#sendanimation
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} animation Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string | number} duration Duration of sent animation in seconds
     * @param {string | number} width Animation width
     * @param {string | number} height Animation height
     * @param {InputFile | string} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string} caption Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the animation caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {boolean} has_spoiler Pass True if the animation needs to be covered with a spoiler animation
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendAnimation(
        chat_id: string | number,
        animation: InputFile | string,
        message_thread_id?: string | number,
        duration?: string | number,
        width?: string | number,
        height?: string | number,
        thumbnail?: InputFile | string,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        has_spoiler?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendAnimation', await get('sendAnimation', {
            chat_id,
            animation,
            message_thread_id,
            duration,
            width,
            height,
            thumbnail,
            caption,
            parse_mode,
            caption_entities,
            has_spoiler,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
     * 
     * Read more: https://core.telegram.org/bots/api#sendvoice
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} voice Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} caption Voice message caption, 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the voice message caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {string | number} duration Duration of the voice message in seconds
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendVoice(
        chat_id: string | number,
        voice: InputFile | string,
        message_thread_id?: string | number,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        duration?: string | number,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendVoice', await get('sendVoice', {
            chat_id,
            voice,
            message_thread_id,
            caption,
            parse_mode,
            caption_entities,
            duration,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendvideonote
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} video_note Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL is currently unsupported
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string | number} duration Duration of sent video in seconds
     * @param {string | number} length Video width and height, i.e. diameter of the video message
     * @param {InputFile | string} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendVideoNote(
        chat_id: string | number,
        video_note: InputFile | string,
        message_thread_id?: string | number,
        duration?: string | number,
        length?: string | number,
        thumbnail?: InputFile | string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendVideoNote', await get('sendVideoNote', {
            chat_id,
            video_note,
            message_thread_id,
            duration,
            length,
            thumbnail,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendmediagroup
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {Array<InputMediaAudio> | Array<InputMediaDocument> | Array<InputMediaPhoto> | Array<InputMediaVideo>} media A JSON-serialized array describing messages to be sent, must include 2-10 items
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {boolean} disable_notification Sends messages silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent messages from forwarding and saving
     * @param {string | number} reply_to_message_id If the messages are a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @returns {Promise<Array<Message>>}
     */
    async function sendMediaGroup(
        chat_id: string | number,
        media: Array<InputMediaAudio> | Array<InputMediaDocument> | Array<InputMediaPhoto> | Array<InputMediaVideo>,
        message_thread_id?: string | number,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean
    ): Promise<Array<Message>> {
        return await Test('sendMediaGroup', await get('sendMediaGroup', {
            chat_id,
            media,
            message_thread_id,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply
        }))
    }
    
    /**
     * Use this method to send point on the map. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendlocation
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} latitude Latitude of the location
     * @param {string | number} longitude Longitude of the location
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string | number} horizontal_accuracy The radius of uncertainty for the location, measured in meters; 0-1500
     * @param {string | number} live_period Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400.
     * @param {string | number} heading For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     * @param {string | number} proximity_alert_radius For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendLocation(
        chat_id: string | number,
        latitude: string | number,
        longitude: string | number,
        message_thread_id?: string | number,
        horizontal_accuracy?: string | number,
        live_period?: string | number,
        heading?: string | number,
        proximity_alert_radius?: string | number,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendLocation', await get('sendLocation', {
            chat_id,
            latitude,
            longitude,
            message_thread_id,
            horizontal_accuracy,
            live_period,
            heading,
            proximity_alert_radius,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send information about a venue. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendvenue
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} latitude Latitude of the venue
     * @param {string | number} longitude Longitude of the venue
     * @param {string} title Name of the venue
     * @param {string} address Address of the venue
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} foursquare_id Foursquare identifier of the venue
     * @param {string} foursquare_type Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
     * @param {string} google_place_id Google Places identifier of the venue
     * @param {string} google_place_type Google Places type of the venue. (See supported types.)
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendVenue(
        chat_id: string | number,
        latitude: string | number,
        longitude: string | number,
        title: string,
        address: string,
        message_thread_id?: string | number,
        foursquare_id?: string,
        foursquare_type?: string,
        google_place_id?: string,
        google_place_type?: string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendVenue', await get('sendVenue', {
            chat_id,
            latitude,
            longitude,
            title,
            address,
            message_thread_id,
            foursquare_id,
            foursquare_type,
            google_place_id,
            google_place_type,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send phone contacts. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendcontact
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} phone_number Contact's phone number
     * @param {string} first_name Contact's first name
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} last_name Contact's last name
     * @param {string} vcard Additional data about the contact in the form of a vCard, 0-2048 bytes
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendContact(
        chat_id: string | number,
        phone_number: string,
        first_name: string,
        message_thread_id?: string | number,
        last_name?: string,
        vcard?: string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendContact', await get('sendContact', {
            chat_id,
            phone_number,
            first_name,
            message_thread_id,
            last_name,
            vcard,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send a native poll. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendpoll
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} question Poll question, 1-300 characters
     * @param {Array<string>} options A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {boolean} is_anonymous True, if the poll needs to be anonymous, defaults to True
     * @param {string} type Poll type, "quiz" or "regular", defaults to "regular"
     * @param {boolean} allows_multiple_answers True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
     * @param {string | number} correct_option_id 0-based identifier of the correct answer option, required for polls in quiz mode
     * @param {string} explanation Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
     * @param {string} explanation_parse_mode Mode for parsing entities in the explanation. See formatting options for more details.
     * @param {Array<MessageEntity>} explanation_entities A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode
     * @param {string | number} open_period Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
     * @param {string | number} close_date Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
     * @param {boolean} is_closed Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendPoll(
        chat_id: string | number,
        question: string,
        options: Array<string>,
        message_thread_id?: string | number,
        is_anonymous?: boolean,
        type?: string,
        allows_multiple_answers?: boolean,
        correct_option_id?: string | number,
        explanation?: string,
        explanation_parse_mode?: string,
        explanation_entities?: Array<MessageEntity>,
        open_period?: string | number,
        close_date?: string | number,
        is_closed?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendPoll', await get('sendPoll', {
            chat_id,
            question,
            options,
            message_thread_id,
            is_anonymous,
            type,
            allows_multiple_answers,
            correct_option_id,
            explanation,
            explanation_parse_mode,
            explanation_entities,
            open_period,
            close_date,
            is_closed,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#senddice
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} emoji Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲"
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendDice(
        chat_id: string | number,
        message_thread_id?: string | number,
        emoji?: string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendDice', await get('sendDice', {
            chat_id,
            message_thread_id,
            emoji,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
     * We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
     * 
     * Read more: https://core.telegram.org/bots/api#sendchataction
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} action Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
     * @param {string | number} message_thread_id Unique identifier for the target message thread; supergroups only
     * @returns {Promise<boolean>}
     */
    async function sendChatAction(
        chat_id: string | number,
        action: string,
        message_thread_id?: string | number
    ): Promise<boolean> {
        return await Test('sendChatAction', await get('sendChatAction', {
            chat_id,
            action,
            message_thread_id
        }))
    }
    
    /**
     * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
     * 
     * Read more: https://core.telegram.org/bots/api#getuserprofilephotos
     * @param {string | number} user_id Unique identifier of the target user
     * @param {string | number} offset Sequential number of the first photo to be returned. By default, all photos are returned.
     * @param {string | number} limit Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     * @returns {Promise<UserProfilePhotos>}
     */
    async function getUserProfilePhotos(
        user_id: string | number,
        offset?: string | number,
        limit?: string | number
    ): Promise<UserProfilePhotos> {
        return await Test('getUserProfilePhotos', await get('getUserProfilePhotos', {
            user_id,
            offset,
            limit
        }))
    }
    
    /**
     * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     * Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
     * 
     * Read more: https://core.telegram.org/bots/api#getfile
     * @param {string} file_id File identifier to get information about
     * @returns {Promise<File>}
     */
    async function getFile(
        file_id: string
    ): Promise<File> {
        return await Test('getFile', await get('getFile', {
            file_id
        }))
    }
    
    /**
     * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#banchatmember
     * @param {string | number | string} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @param {string | number} until_date Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
     * @param {boolean} revoke_messages Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
     * @returns {Promise<boolean>}
     */
    async function banChatMember(
        chat_id: string | number,
        user_id: string | number,
        until_date?: string | number,
        revoke_messages?: boolean
    ): Promise<boolean> {
        return await Test('banChatMember', await get('banChatMember', {
            chat_id,
            user_id,
            until_date,
            revoke_messages
        }))
    }
    
    /**
     * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unbanchatmember
     * @param {string | number | string} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @param {boolean} only_if_banned Do nothing if the user is not banned
     * @returns {Promise<boolean>}
     */
    async function unbanChatMember(
        chat_id: string | number,
        user_id: string | number,
        only_if_banned?: boolean
    ): Promise<boolean> {
        return await Test('unbanChatMember', await get('unbanChatMember', {
            chat_id,
            user_id,
            only_if_banned
        }))
    }
    
    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#restrictchatmember
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @param {ChatPermissions} permissions A JSON-serialized object for new user permissions
     * @param {boolean} use_independent_chat_permissions Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
     * @param {string | number} until_date Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
     * @returns {Promise<boolean>}
     */
    async function restrictChatMember(
        chat_id: string | number,
        user_id: string | number,
        permissions: ChatPermissions,
        use_independent_chat_permissions?: boolean,
        until_date?: string | number
    ): Promise<boolean> {
        return await Test('restrictChatMember', await get('restrictChatMember', {
            chat_id,
            user_id,
            permissions,
            use_independent_chat_permissions,
            until_date
        }))
    }
    
    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#promotechatmember
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @param {boolean} is_anonymous Pass True if the administrator's presence in the chat is hidden
     * @param {boolean} can_manage_chat Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
     * @param {boolean} can_post_messages Pass True if the administrator can create channel posts, channels only
     * @param {boolean} can_edit_messages Pass True if the administrator can edit messages of other users and can pin messages, channels only
     * @param {boolean} can_delete_messages Pass True if the administrator can delete messages of other users
     * @param {boolean} can_manage_video_chats Pass True if the administrator can manage video chats
     * @param {boolean} can_restrict_members Pass True if the administrator can restrict, ban or unban chat members
     * @param {boolean} can_promote_members Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
     * @param {boolean} can_change_info Pass True if the administrator can change chat title, photo and other settings
     * @param {boolean} can_invite_users Pass True if the administrator can invite new users to the chat
     * @param {boolean} can_pin_messages Pass True if the administrator can pin messages, supergroups only
     * @param {boolean} can_manage_topics Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only
     * @returns {Promise<boolean>}
     */
    async function promoteChatMember(
        chat_id: string | number,
        user_id: string | number,
        is_anonymous?: boolean,
        can_manage_chat?: boolean,
        can_post_messages?: boolean,
        can_edit_messages?: boolean,
        can_delete_messages?: boolean,
        can_manage_video_chats?: boolean,
        can_restrict_members?: boolean,
        can_promote_members?: boolean,
        can_change_info?: boolean,
        can_invite_users?: boolean,
        can_pin_messages?: boolean,
        can_manage_topics?: boolean
    ): Promise<boolean> {
        return await Test('promoteChatMember', await get('promoteChatMember', {
            chat_id,
            user_id,
            is_anonymous,
            can_manage_chat,
            can_post_messages,
            can_edit_messages,
            can_delete_messages,
            can_manage_video_chats,
            can_restrict_members,
            can_promote_members,
            can_change_info,
            can_invite_users,
            can_pin_messages,
            can_manage_topics
        }))
    }
    
    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatadministratorcustomtitle
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @param {string} custom_title New custom title for the administrator; 0-16 characters, emoji are not allowed
     * @returns {Promise<boolean>}
     */
    async function setChatAdministratorCustomTitle(
        chat_id: string | number,
        user_id: string | number,
        custom_title: string
    ): Promise<boolean> {
        return await Test('setChatAdministratorCustomTitle', await get('setChatAdministratorCustomTitle', {
            chat_id,
            user_id,
            custom_title
        }))
    }
    
    /**
     * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#banchatsenderchat
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} sender_chat_id Unique identifier of the target sender chat
     * @returns {Promise<boolean>}
     */
    async function banChatSenderChat(
        chat_id: string | number,
        sender_chat_id: string | number
    ): Promise<boolean> {
        return await Test('banChatSenderChat', await get('banChatSenderChat', {
            chat_id,
            sender_chat_id
        }))
    }
    
    /**
     * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unbanchatsenderchat
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} sender_chat_id Unique identifier of the target sender chat
     * @returns {Promise<boolean>}
     */
    async function unbanChatSenderChat(
        chat_id: string | number,
        sender_chat_id: string | number
    ): Promise<boolean> {
        return await Test('unbanChatSenderChat', await get('unbanChatSenderChat', {
            chat_id,
            sender_chat_id
        }))
    }
    
    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatpermissions
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {ChatPermissions} permissions A JSON-serialized object for new default chat permissions
     * @param {boolean} use_independent_chat_permissions Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
     * @returns {Promise<boolean>}
     */
    async function setChatPermissions(
        chat_id: string | number,
        permissions: ChatPermissions,
        use_independent_chat_permissions?: boolean
    ): Promise<boolean> {
        return await Test('setChatPermissions', await get('setChatPermissions', {
            chat_id,
            permissions,
            use_independent_chat_permissions
        }))
    }
    
    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
     * 
     * Read more: https://core.telegram.org/bots/api#exportchatinvitelink
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @returns {Promise<string>}
     */
    async function exportChatInviteLink(
        chat_id: string | number
    ): Promise<string> {
        return await Test('exportChatInviteLink', await get('exportChatInviteLink', {
            chat_id
        }))
    }
    
    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
     * 
     * Read more: https://core.telegram.org/bots/api#createchatinvitelink
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} name Invite link name; 0-32 characters
     * @param {string | number} expire_date Point in time (Unix timestamp) when the link will expire
     * @param {string | number} member_limit The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
     * @param {boolean} creates_join_request True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
     * @returns {Promise<ChatInviteLink>}
     */
    async function createChatInviteLink(
        chat_id: string | number,
        name?: string,
        expire_date?: string | number,
        member_limit?: string | number,
        creates_join_request?: boolean
    ): Promise<ChatInviteLink> {
        return await Test('createChatInviteLink', await get('createChatInviteLink', {
            chat_id,
            name,
            expire_date,
            member_limit,
            creates_join_request
        }))
    }
    
    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
     * 
     * Read more: https://core.telegram.org/bots/api#editchatinvitelink
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} invite_link The invite link to edit
     * @param {string} name Invite link name; 0-32 characters
     * @param {string | number} expire_date Point in time (Unix timestamp) when the link will expire
     * @param {string | number} member_limit The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
     * @param {boolean} creates_join_request True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
     * @returns {Promise<ChatInviteLink>}
     */
    async function editChatInviteLink(
        chat_id: string | number,
        invite_link: string,
        name?: string,
        expire_date?: string | number,
        member_limit?: string | number,
        creates_join_request?: boolean
    ): Promise<ChatInviteLink> {
        return await Test('editChatInviteLink', await get('editChatInviteLink', {
            chat_id,
            invite_link,
            name,
            expire_date,
            member_limit,
            creates_join_request
        }))
    }
    
    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
     * 
     * Read more: https://core.telegram.org/bots/api#revokechatinvitelink
     * @param {string | number | string} chat_id Unique identifier of the target chat or username of the target channel (in the format @channelusername)
     * @param {string} invite_link The invite link to revoke
     * @returns {Promise<ChatInviteLink>}
     */
    async function revokeChatInviteLink(
        chat_id: string | number,
        invite_link: string
    ): Promise<ChatInviteLink> {
        return await Test('revokeChatInviteLink', await get('revokeChatInviteLink', {
            chat_id,
            invite_link
        }))
    }
    
    /**
     * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#approvechatjoinrequest
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @returns {Promise<boolean>}
     */
    async function approveChatJoinRequest(
        chat_id: string | number,
        user_id: string | number
    ): Promise<boolean> {
        return await Test('approveChatJoinRequest', await get('approveChatJoinRequest', {
            chat_id,
            user_id
        }))
    }
    
    /**
     * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#declinechatjoinrequest
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @returns {Promise<boolean>}
     */
    async function declineChatJoinRequest(
        chat_id: string | number,
        user_id: string | number
    ): Promise<boolean> {
        return await Test('declineChatJoinRequest', await get('declineChatJoinRequest', {
            chat_id,
            user_id
        }))
    }
    
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatphoto
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile} photo New chat photo, uploaded using multipart/form-data
     * @returns {Promise<boolean>}
     */
    async function setChatPhoto(
        chat_id: string | number,
        photo: InputFile
    ): Promise<boolean> {
        return await Test('setChatPhoto', await get('setChatPhoto', {
            chat_id,
            photo
        }))
    }
    
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletechatphoto
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @returns {Promise<boolean>}
     */
    async function deleteChatPhoto(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('deleteChatPhoto', await get('deleteChatPhoto', {
            chat_id
        }))
    }
    
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchattitle
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} title New chat title, 1-128 characters
     * @returns {Promise<boolean>}
     */
    async function setChatTitle(
        chat_id: string | number,
        title: string
    ): Promise<boolean> {
        return await Test('setChatTitle', await get('setChatTitle', {
            chat_id,
            title
        }))
    }
    
    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatdescription
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} description New chat description, 0-255 characters
     * @returns {Promise<boolean>}
     */
    async function setChatDescription(
        chat_id: string | number,
        description?: string
    ): Promise<boolean> {
        return await Test('setChatDescription', await get('setChatDescription', {
            chat_id,
            description
        }))
    }
    
    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#pinchatmessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Identifier of a message to pin
     * @param {boolean} disable_notification Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
     * @returns {Promise<boolean>}
     */
    async function pinChatMessage(
        chat_id: string | number,
        message_id: string | number,
        disable_notification?: boolean
    ): Promise<boolean> {
        return await Test('pinChatMessage', await get('pinChatMessage', {
            chat_id,
            message_id,
            disable_notification
        }))
    }
    
    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unpinchatmessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
     * @returns {Promise<boolean>}
     */
    async function unpinChatMessage(
        chat_id: string | number,
        message_id?: string | number
    ): Promise<boolean> {
        return await Test('unpinChatMessage', await get('unpinChatMessage', {
            chat_id,
            message_id
        }))
    }
    
    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unpinallchatmessages
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @returns {Promise<boolean>}
     */
    async function unpinAllChatMessages(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('unpinAllChatMessages', await get('unpinAllChatMessages', {
            chat_id
        }))
    }
    
    /**
     * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#leavechat
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
     * @returns {Promise<boolean>}
     */
    async function leaveChat(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('leaveChat', await get('leaveChat', {
            chat_id
        }))
    }
    
    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getchat
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
     * @returns {Promise<Chat>}
     */
    async function getChat(
        chat_id: string | number
    ): Promise<Chat> {
        return await Test('getChat', await get('getChat', {
            chat_id
        }))
    }
    
    /**
     * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
     * 
     * Read more: https://core.telegram.org/bots/api#getchatadministrators
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
     * @returns {Promise<Array<ChatMember>>}
     */
    async function getChatAdministrators(
        chat_id: string | number
    ): Promise<Array<ChatMember>> {
        return await Test('getChatAdministrators', await get('getChatAdministrators', {
            chat_id
        }))
    }
    
    /**
     * Use this method to get the number of members in a chat. Returns Int on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getchatmembercount
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
     * @returns {Promise<string | number>}
     */
    async function getChatMemberCount(
        chat_id: string | number
    ): Promise<string | number> {
        return await Test('getChatMemberCount', await get('getChatMemberCount', {
            chat_id
        }))
    }
    
    /**
     * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getchatmember
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
     * @param {string | number} user_id Unique identifier of the target user
     * @returns {Promise<ChatMember>}
     */
    async function getChatMember(
        chat_id: string | number,
        user_id: string | number
    ): Promise<ChatMember> {
        return await Test('getChatMember', await get('getChatMember', {
            chat_id,
            user_id
        }))
    }
    
    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatstickerset
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string} sticker_set_name Name of the sticker set to be set as the group sticker set
     * @returns {Promise<boolean>}
     */
    async function setChatStickerSet(
        chat_id: string | number,
        sticker_set_name: string
    ): Promise<boolean> {
        return await Test('setChatStickerSet', await get('setChatStickerSet', {
            chat_id,
            sticker_set_name
        }))
    }
    
    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletechatstickerset
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @returns {Promise<boolean>}
     */
    async function deleteChatStickerSet(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('deleteChatStickerSet', await get('deleteChatStickerSet', {
            chat_id
        }))
    }
    
    /**
     * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
     * 
     * Read more: https://core.telegram.org/bots/api#getforumtopiciconstickers * @returns {Promise<Array<Sticker>>}
     */
    async function getForumTopicIconStickers(): Promise<Array<Sticker>> {
        return await Test('getForumTopicIconStickers', await get('getForumTopicIconStickers', {
            
        }))
    }
    
    /**
     * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
     * 
     * Read more: https://core.telegram.org/bots/api#createforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string} name Topic name, 1-128 characters
     * @param {string | number} icon_color Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
     * @param {string} icon_custom_emoji_id Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
     * @returns {Promise<ForumTopic>}
     */
    async function createForumTopic(
        chat_id: string | number,
        name: string,
        icon_color?: string | number,
        icon_custom_emoji_id?: string
    ): Promise<ForumTopic> {
        return await Test('createForumTopic', await get('createForumTopic', {
            chat_id,
            name,
            icon_color,
            icon_custom_emoji_id
        }))
    }
    
    /**
     * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#editforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread of the forum topic
     * @param {string} name New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
     * @param {string} icon_custom_emoji_id New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
     * @returns {Promise<boolean>}
     */
    async function editForumTopic(
        chat_id: string | number,
        message_thread_id: string | number,
        name?: string,
        icon_custom_emoji_id?: string
    ): Promise<boolean> {
        return await Test('editForumTopic', await get('editForumTopic', {
            chat_id,
            message_thread_id,
            name,
            icon_custom_emoji_id
        }))
    }
    
    /**
     * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#closeforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread of the forum topic
     * @returns {Promise<boolean>}
     */
    async function closeForumTopic(
        chat_id: string | number,
        message_thread_id: string | number
    ): Promise<boolean> {
        return await Test('closeForumTopic', await get('closeForumTopic', {
            chat_id,
            message_thread_id
        }))
    }
    
    /**
     * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#reopenforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread of the forum topic
     * @returns {Promise<boolean>}
     */
    async function reopenForumTopic(
        chat_id: string | number,
        message_thread_id: string | number
    ): Promise<boolean> {
        return await Test('reopenForumTopic', await get('reopenForumTopic', {
            chat_id,
            message_thread_id
        }))
    }
    
    /**
     * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deleteforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread of the forum topic
     * @returns {Promise<boolean>}
     */
    async function deleteForumTopic(
        chat_id: string | number,
        message_thread_id: string | number
    ): Promise<boolean> {
        return await Test('deleteForumTopic', await get('deleteForumTopic', {
            chat_id,
            message_thread_id
        }))
    }
    
    /**
     * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unpinallforumtopicmessages
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string | number} message_thread_id Unique identifier for the target message thread of the forum topic
     * @returns {Promise<boolean>}
     */
    async function unpinAllForumTopicMessages(
        chat_id: string | number,
        message_thread_id: string | number
    ): Promise<boolean> {
        return await Test('unpinAllForumTopicMessages', await get('unpinAllForumTopicMessages', {
            chat_id,
            message_thread_id
        }))
    }
    
    /**
     * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#editgeneralforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @param {string} name New topic name, 1-128 characters
     * @returns {Promise<boolean>}
     */
    async function editGeneralForumTopic(
        chat_id: string | number,
        name: string
    ): Promise<boolean> {
        return await Test('editGeneralForumTopic', await get('editGeneralForumTopic', {
            chat_id,
            name
        }))
    }
    
    /**
     * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#closegeneralforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @returns {Promise<boolean>}
     */
    async function closeGeneralForumTopic(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('closeGeneralForumTopic', await get('closeGeneralForumTopic', {
            chat_id
        }))
    }
    
    /**
     * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#reopengeneralforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @returns {Promise<boolean>}
     */
    async function reopenGeneralForumTopic(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('reopenGeneralForumTopic', await get('reopenGeneralForumTopic', {
            chat_id
        }))
    }
    
    /**
     * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#hidegeneralforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @returns {Promise<boolean>}
     */
    async function hideGeneralForumTopic(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('hideGeneralForumTopic', await get('hideGeneralForumTopic', {
            chat_id
        }))
    }
    
    /**
     * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#unhidegeneralforumtopic
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
     * @returns {Promise<boolean>}
     */
    async function unhideGeneralForumTopic(
        chat_id: string | number
    ): Promise<boolean> {
        return await Test('unhideGeneralForumTopic', await get('unhideGeneralForumTopic', {
            chat_id
        }))
    }
    
    /**
     * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#answercallbackquery
     * @param {string} callback_query_id Unique identifier for the query to be answered
     * @param {string} text Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
     * @param {boolean} show_alert If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
     * @param {string} url URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
     * @param {string | number} cache_time The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
     * @returns {Promise<boolean>}
     */
    async function answerCallbackQuery(
        callback_query_id: string,
        text?: string,
        show_alert?: boolean,
        url?: string,
        cache_time?: string | number
    ): Promise<boolean> {
        return await Test('answerCallbackQuery', await get('answerCallbackQuery', {
            callback_query_id,
            text,
            show_alert,
            url,
            cache_time
        }))
    }
    
    /**
     * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setmycommands
     * @param {Array<BotCommand>} commands A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
     * @param {BotCommandScope} scope A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
     * @param {string} language_code A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
     * @returns {Promise<boolean>}
     */
    async function setMyCommands(
        commands: Array<BotCommand>,
        scope?: BotCommandScope,
        language_code?: string
    ): Promise<boolean> {
        return await Test('setMyCommands', await get('setMyCommands', {
            commands,
            scope,
            language_code
        }))
    }
    
    /**
     * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletemycommands
     * @param {BotCommandScope} scope A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
     * @param {string} language_code A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
     * @returns {Promise<boolean>}
     */
    async function deleteMyCommands(
        scope?: BotCommandScope,
        language_code?: string
    ): Promise<boolean> {
        return await Test('deleteMyCommands', await get('deleteMyCommands', {
            scope,
            language_code
        }))
    }
    
    /**
     * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#getmycommands
     * @param {BotCommandScope} scope A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
     * @param {string} language_code A two-letter ISO 639-1 language code or an empty string
     * @returns {Promise<Array<BotCommand>>}
     */
    async function getMyCommands(
        scope?: BotCommandScope,
        language_code?: string
    ): Promise<Array<BotCommand>> {
        return await Test('getMyCommands', await get('getMyCommands', {
            scope,
            language_code
        }))
    }
    
    /**
     * Use this method to change the bot's name. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setmyname
     * @param {string} name New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
     * @param {string} language_code A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
     * @returns {Promise<boolean>}
     */
    async function setMyName(
        name?: string,
        language_code?: string
    ): Promise<boolean> {
        return await Test('setMyName', await get('setMyName', {
            name,
            language_code
        }))
    }
    
    /**
     * Use this method to get the current bot name for the given user language. Returns BotName on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getmyname
     * @param {string} language_code A two-letter ISO 639-1 language code or an empty string
     * @returns {Promise<BotName>}
     */
    async function getMyName(
        language_code?: string
    ): Promise<BotName> {
        return await Test('getMyName', await get('getMyName', {
            language_code
        }))
    }
    
    /**
     * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setmydescription
     * @param {string} description New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
     * @param {string} language_code A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
     * @returns {Promise<boolean>}
     */
    async function setMyDescription(
        description?: string,
        language_code?: string
    ): Promise<boolean> {
        return await Test('setMyDescription', await get('setMyDescription', {
            description,
            language_code
        }))
    }
    
    /**
     * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getmydescription
     * @param {string} language_code A two-letter ISO 639-1 language code or an empty string
     * @returns {Promise<BotDescription>}
     */
    async function getMyDescription(
        language_code?: string
    ): Promise<BotDescription> {
        return await Test('getMyDescription', await get('getMyDescription', {
            language_code
        }))
    }
    
    /**
     * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setmyshortdescription
     * @param {string} short_description New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
     * @param {string} language_code A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
     * @returns {Promise<boolean>}
     */
    async function setMyShortDescription(
        short_description?: string,
        language_code?: string
    ): Promise<boolean> {
        return await Test('setMyShortDescription', await get('setMyShortDescription', {
            short_description,
            language_code
        }))
    }
    
    /**
     * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getmyshortdescription
     * @param {string} language_code A two-letter ISO 639-1 language code or an empty string
     * @returns {Promise<BotShortDescription>}
     */
    async function getMyShortDescription(
        language_code?: string
    ): Promise<BotShortDescription> {
        return await Test('getMyShortDescription', await get('getMyShortDescription', {
            language_code
        }))
    }
    
    /**
     * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setchatmenubutton
     * @param {string | number} chat_id Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
     * @param {MenuButton} menu_button A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
     * @returns {Promise<boolean>}
     */
    async function setChatMenuButton(
        chat_id?: string | number,
        menu_button?: MenuButton
    ): Promise<boolean> {
        return await Test('setChatMenuButton', await get('setChatMenuButton', {
            chat_id,
            menu_button
        }))
    }
    
    /**
     * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getchatmenubutton
     * @param {string | number} chat_id Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
     * @returns {Promise<MenuButton>}
     */
    async function getChatMenuButton(
        chat_id?: string | number
    ): Promise<MenuButton> {
        return await Test('getChatMenuButton', await get('getChatMenuButton', {
            chat_id
        }))
    }
    
    /**
     * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setmydefaultadministratorrights
     * @param {ChatAdministratorRights} rights A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
     * @param {boolean} for_channels Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
     * @returns {Promise<boolean>}
     */
    async function setMyDefaultAdministratorRights(
        rights?: ChatAdministratorRights,
        for_channels?: boolean
    ): Promise<boolean> {
        return await Test('setMyDefaultAdministratorRights', await get('setMyDefaultAdministratorRights', {
            rights,
            for_channels
        }))
    }
    
    /**
     * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
     * 
     * Read more: https://core.telegram.org/bots/api#getmydefaultadministratorrights
     * @param {boolean} for_channels Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
     * @returns {Promise<ChatAdministratorRights>}
     */
    async function getMyDefaultAdministratorRights(
        for_channels?: boolean
    ): Promise<ChatAdministratorRights> {
        return await Test('getMyDefaultAdministratorRights', await get('getMyDefaultAdministratorRights', {
            for_channels
        }))
    }
    
    /**
     * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#editmessagetext
     * @param {string} text New text of the message, 1-4096 characters after entities parsing
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message to edit
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {string} parse_mode Mode for parsing entities in the message text. See formatting options for more details.
     * @param {Array<MessageEntity>} entities A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
     * @param {boolean} disable_web_page_preview Disables link previews for links in this message
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for an inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function editMessageText(
        text: string,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        parse_mode?: string,
        entities?: Array<MessageEntity>,
        disable_web_page_preview?: boolean,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('editMessageText', await get('editMessageText', {
            text,
            chat_id,
            message_id,
            inline_message_id,
            parse_mode,
            entities,
            disable_web_page_preview,
            reply_markup
        }))
    }
    
    /**
     * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#editmessagecaption
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message to edit
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {string} caption New caption of the message, 0-1024 characters after entities parsing
     * @param {string} parse_mode Mode for parsing entities in the message caption. See formatting options for more details.
     * @param {Array<MessageEntity>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for an inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function editMessageCaption(
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        caption?: string,
        parse_mode?: string,
        caption_entities?: Array<MessageEntity>,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('editMessageCaption', await get('editMessageCaption', {
            chat_id,
            message_id,
            inline_message_id,
            caption,
            parse_mode,
            caption_entities,
            reply_markup
        }))
    }
    
    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#editmessagemedia
     * @param {InputMedia} media A JSON-serialized object for a new media content of the message
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message to edit
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for a new inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function editMessageMedia(
        media: InputMedia,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('editMessageMedia', await get('editMessageMedia', {
            media,
            chat_id,
            message_id,
            inline_message_id,
            reply_markup
        }))
    }
    
    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#editmessagelivelocation
     * @param {string | number} latitude Latitude of new location
     * @param {string | number} longitude Longitude of new location
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message to edit
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {string | number} horizontal_accuracy The radius of uncertainty for the location, measured in meters; 0-1500
     * @param {string | number} heading Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     * @param {string | number} proximity_alert_radius The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for a new inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function editMessageLiveLocation(
        latitude: string | number,
        longitude: string | number,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        horizontal_accuracy?: string | number,
        heading?: string | number,
        proximity_alert_radius?: string | number,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('editMessageLiveLocation', await get('editMessageLiveLocation', {
            latitude,
            longitude,
            chat_id,
            message_id,
            inline_message_id,
            horizontal_accuracy,
            heading,
            proximity_alert_radius,
            reply_markup
        }))
    }
    
    /**
     * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#stopmessagelivelocation
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message with live location to stop
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for a new inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function stopMessageLiveLocation(
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('stopMessageLiveLocation', await get('stopMessageLiveLocation', {
            chat_id,
            message_id,
            inline_message_id,
            reply_markup
        }))
    }
    
    /**
     * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#editmessagereplymarkup
     * @param {string | number | string} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the message to edit
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for an inline keyboard.
     * @returns {Promise<Message | boolean>}
     */
    async function editMessageReplyMarkup(
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message | boolean> {
        return await Test('editMessageReplyMarkup', await get('editMessageReplyMarkup', {
            chat_id,
            message_id,
            inline_message_id,
            reply_markup
        }))
    }
    
    /**
     * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#stoppoll
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Identifier of the original message with the poll
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for a new message inline keyboard.
     * @returns {Promise<Poll>}
     */
    async function stopPoll(
        chat_id: string | number,
        message_id: string | number,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Poll> {
        return await Test('stopPoll', await get('stopPoll', {
            chat_id,
            message_id,
            reply_markup
        }))
    }
    
    /**
     * Use this method to delete a message, including service messages, with the following limitations:
     * - A message can only be deleted if it was sent less than 48 hours ago.
     * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
     * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
     * - Bots can delete outgoing messages in private chats, groups, and supergroups.
     * - Bots can delete incoming messages in private chats.
     * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
     * - If the bot is an administrator of a group, it can delete any message there.
     * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
     * Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletemessage
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string | number} message_id Identifier of the message to delete
     * @returns {Promise<boolean>}
     */
    async function deleteMessage(
        chat_id: string | number,
        message_id: string | number
    ): Promise<boolean> {
        return await Test('deleteMessage', await get('deleteMessage', {
            chat_id,
            message_id
        }))
    }
    
    /**
     * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendsticker
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {InputFile | string} sticker Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Video stickers can only be sent by a file_id. Animated stickers can't be sent via an HTTP URL.
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string} emoji Emoji associated with the sticker; only for just uploaded stickers
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     * @returns {Promise<Message>}
     */
    async function sendSticker(
        chat_id: string | number,
        sticker: InputFile | string,
        message_thread_id?: string | number,
        emoji?: string,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
    ): Promise<Message> {
        return await Test('sendSticker', await get('sendSticker', {
            chat_id,
            sticker,
            message_thread_id,
            emoji,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to get a sticker set. On success, a StickerSet object is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#getstickerset
     * @param {string} name Name of the sticker set
     * @returns {Promise<StickerSet>}
     */
    async function getStickerSet(
        name: string
    ): Promise<StickerSet> {
        return await Test('getStickerSet', await get('getStickerSet', {
            name
        }))
    }
    
    /**
     * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
     * 
     * Read more: https://core.telegram.org/bots/api#getcustomemojistickers
     * @param {Array<string>} custom_emoji_ids List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
     * @returns {Promise<Array<Sticker>>}
     */
    async function getCustomEmojiStickers(
        custom_emoji_ids: Array<string>
    ): Promise<Array<Sticker>> {
        return await Test('getCustomEmojiStickers', await get('getCustomEmojiStickers', {
            custom_emoji_ids
        }))
    }
    
    /**
     * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
     * 
     * Read more: https://core.telegram.org/bots/api#uploadstickerfile
     * @param {string | number} user_id User identifier of sticker file owner
     * @param {InputFile} sticker A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
     * @param {string} sticker_format Format of the sticker, must be one of "static", "animated", "video"
     * @returns {Promise<File>}
     */
    async function uploadStickerFile(
        user_id: string | number,
        sticker: InputFile,
        sticker_format: string
    ): Promise<File> {
        return await Test('uploadStickerFile', await get('uploadStickerFile', {
            user_id,
            sticker,
            sticker_format
        }))
    }
    
    /**
     * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#createnewstickerset
     * @param {string | number} user_id User identifier of created sticker set owner
     * @param {string} name Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
     * @param {string} title Sticker set title, 1-64 characters
     * @param {Array<InputSticker>} stickers A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
     * @param {string} sticker_format Format of stickers in the set, must be one of "static", "animated", "video"
     * @param {string} sticker_type Type of stickers in the set, pass "regular", "mask", or "custom_emoji". By default, a regular sticker set is created.
     * @param {boolean} needs_repainting Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
     * @returns {Promise<boolean>}
     */
    async function createNewStickerSet(
        user_id: string | number,
        name: string,
        title: string,
        stickers: Array<InputSticker>,
        sticker_format: string,
        sticker_type?: string,
        needs_repainting?: boolean
    ): Promise<boolean> {
        return await Test('createNewStickerSet', await get('createNewStickerSet', {
            user_id,
            name,
            title,
            stickers,
            sticker_format,
            sticker_type,
            needs_repainting
        }))
    }
    
    /**
     * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#addstickertoset
     * @param {string | number} user_id User identifier of sticker set owner
     * @param {string} name Sticker set name
     * @param {InputSticker} sticker A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
     * @returns {Promise<boolean>}
     */
    async function addStickerToSet(
        user_id: string | number,
        name: string,
        sticker: InputSticker
    ): Promise<boolean> {
        return await Test('addStickerToSet', await get('addStickerToSet', {
            user_id,
            name,
            sticker
        }))
    }
    
    /**
     * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickerpositioninset
     * @param {string} sticker File identifier of the sticker
     * @param {string | number} position New sticker position in the set, zero-based
     * @returns {Promise<boolean>}
     */
    async function setStickerPositionInSet(
        sticker: string,
        position: string | number
    ): Promise<boolean> {
        return await Test('setStickerPositionInSet', await get('setStickerPositionInSet', {
            sticker,
            position
        }))
    }
    
    /**
     * Use this method to delete a sticker from a set created by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletestickerfromset
     * @param {string} sticker File identifier of the sticker
     * @returns {Promise<boolean>}
     */
    async function deleteStickerFromSet(
        sticker: string
    ): Promise<boolean> {
        return await Test('deleteStickerFromSet', await get('deleteStickerFromSet', {
            sticker
        }))
    }
    
    /**
     * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickeremojilist
     * @param {string} sticker File identifier of the sticker
     * @param {Array<string>} emoji_list A JSON-serialized list of 1-20 emoji associated with the sticker
     * @returns {Promise<boolean>}
     */
    async function setStickerEmojiList(
        sticker: string,
        emoji_list: Array<string>
    ): Promise<boolean> {
        return await Test('setStickerEmojiList', await get('setStickerEmojiList', {
            sticker,
            emoji_list
        }))
    }
    
    /**
     * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickerkeywords
     * @param {string} sticker File identifier of the sticker
     * @param {Array<string>} keywords A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
     * @returns {Promise<boolean>}
     */
    async function setStickerKeywords(
        sticker: string,
        keywords?: Array<string>
    ): Promise<boolean> {
        return await Test('setStickerKeywords', await get('setStickerKeywords', {
            sticker,
            keywords
        }))
    }
    
    /**
     * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickermaskposition
     * @param {string} sticker File identifier of the sticker
     * @param {MaskPosition} mask_position A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
     * @returns {Promise<boolean>}
     */
    async function setStickerMaskPosition(
        sticker: string,
        mask_position?: MaskPosition
    ): Promise<boolean> {
        return await Test('setStickerMaskPosition', await get('setStickerMaskPosition', {
            sticker,
            mask_position
        }))
    }
    
    /**
     * Use this method to set the title of a created sticker set. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickersettitle
     * @param {string} name Sticker set name
     * @param {string} title Sticker set title, 1-64 characters
     * @returns {Promise<boolean>}
     */
    async function setStickerSetTitle(
        name: string,
        title: string
    ): Promise<boolean> {
        return await Test('setStickerSetTitle', await get('setStickerSetTitle', {
            name,
            title
        }))
    }
    
    /**
     * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setstickersetthumbnail
     * @param {string} name Sticker set name
     * @param {string | number} user_id User identifier of the sticker set owner
     * @param {InputFile | string} thumbnail A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
     * @returns {Promise<boolean>}
     */
    async function setStickerSetThumbnail(
        name: string,
        user_id: string | number,
        thumbnail?: InputFile | string
    ): Promise<boolean> {
        return await Test('setStickerSetThumbnail', await get('setStickerSetThumbnail', {
            name,
            user_id,
            thumbnail
        }))
    }
    
    /**
     * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
     * @param {string} name Sticker set name
     * @param {string} custom_emoji_id Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
     * @returns {Promise<boolean>}
     */
    async function setCustomEmojiStickerSetThumbnail(
        name: string,
        custom_emoji_id?: string
    ): Promise<boolean> {
        return await Test('setCustomEmojiStickerSetThumbnail', await get('setCustomEmojiStickerSetThumbnail', {
            name,
            custom_emoji_id
        }))
    }
    
    /**
     * Use this method to delete a sticker set that was created by the bot. Returns True on success.
     * 
     * Read more: https://core.telegram.org/bots/api#deletestickerset
     * @param {string} name Sticker set name
     * @returns {Promise<boolean>}
     */
    async function deleteStickerSet(
        name: string
    ): Promise<boolean> {
        return await Test('deleteStickerSet', await get('deleteStickerSet', {
            name
        }))
    }
    
    /**
     * Use this method to send answers to an inline query. On success, True is returned.
     * No more than 50 results per query are allowed.
     * 
     * Read more: https://core.telegram.org/bots/api#answerinlinequery
     * @param {string} inline_query_id Unique identifier for the answered query
     * @param {Array<InlineQueryResult>} results A JSON-serialized array of results for the inline query
     * @param {string | number} cache_time The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
     * @param {boolean} is_personal Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
     * @param {string} next_offset Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
     * @param {InlineQueryResultsButton} button A JSON-serialized object describing a button to be shown above inline query results
     * @returns {Promise<boolean>}
     */
    async function answerInlineQuery(
        inline_query_id: string,
        results: Array<InlineQueryResult>,
        cache_time?: string | number,
        is_personal?: boolean,
        next_offset?: string,
        button?: InlineQueryResultsButton
    ): Promise<boolean> {
        return await Test('answerInlineQuery', await get('answerInlineQuery', {
            inline_query_id,
            results,
            cache_time,
            is_personal,
            next_offset,
            button
        }))
    }
    
    /**
     * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#answerwebappquery
     * @param {string} web_app_query_id Unique identifier for the query to be answered
     * @param {InlineQueryResult} result A JSON-serialized object describing the message to be sent
     * @returns {Promise<SentWebAppMessage>}
     */
    async function answerWebAppQuery(
        web_app_query_id: string,
        result: InlineQueryResult
    ): Promise<SentWebAppMessage> {
        return await Test('answerWebAppQuery', await get('answerWebAppQuery', {
            web_app_query_id,
            result
        }))
    }
    
    /**
     * Use this method to send invoices. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendinvoice
     * @param {string | number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param {string} title Product name, 1-32 characters
     * @param {string} description Product description, 1-255 characters
     * @param {string} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
     * @param {string} provider_token Payment provider token, obtained via @BotFather
     * @param {string} currency Three-letter ISO 4217 currency code, see more on currencies
     * @param {Array<LabeledPrice>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {string | number} max_tip_amount The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
     * @param {Array<string | number>} suggested_tip_amounts A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
     * @param {string} start_parameter Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
     * @param {string} provider_data JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
     * @param {string} photo_url URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
     * @param {string | number} photo_size Photo size in bytes
     * @param {string | number} photo_width Photo width
     * @param {string | number} photo_height Photo height
     * @param {boolean} need_name Pass True if you require the user's full name to complete the order
     * @param {boolean} need_phone_number Pass True if you require the user's phone number to complete the order
     * @param {boolean} need_email Pass True if you require the user's email address to complete the order
     * @param {boolean} need_shipping_address Pass True if you require the user's shipping address to complete the order
     * @param {boolean} send_phone_number_to_provider Pass True if the user's phone number should be sent to provider
     * @param {boolean} send_email_to_provider Pass True if the user's email address should be sent to provider
     * @param {boolean} is_flexible Pass True if the final price depends on the shipping method
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
     * @returns {Promise<Message>}
     */
    async function sendInvoice(
        chat_id: string | number,
        title: string,
        description: string,
        payload: string,
        provider_token: string,
        currency: string,
        prices: Array<LabeledPrice>,
        message_thread_id?: string | number,
        max_tip_amount?: string | number,
        suggested_tip_amounts?: Array<string | number>,
        start_parameter?: string,
        provider_data?: string,
        photo_url?: string,
        photo_size?: string | number,
        photo_width?: string | number,
        photo_height?: string | number,
        need_name?: boolean,
        need_phone_number?: boolean,
        need_email?: boolean,
        need_shipping_address?: boolean,
        send_phone_number_to_provider?: boolean,
        send_email_to_provider?: boolean,
        is_flexible?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message> {
        return await Test('sendInvoice', await get('sendInvoice', {
            chat_id,
            title,
            description,
            payload,
            provider_token,
            currency,
            prices,
            message_thread_id,
            max_tip_amount,
            suggested_tip_amounts,
            start_parameter,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
     * 
     * Read more: https://core.telegram.org/bots/api#createinvoicelink
     * @param {string} title Product name, 1-32 characters
     * @param {string} description Product description, 1-255 characters
     * @param {string} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
     * @param {string} provider_token Payment provider token, obtained via BotFather
     * @param {string} currency Three-letter ISO 4217 currency code, see more on currencies
     * @param {Array<LabeledPrice>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
     * @param {string | number} max_tip_amount The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
     * @param {Array<string | number>} suggested_tip_amounts A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
     * @param {string} provider_data JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
     * @param {string} photo_url URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
     * @param {string | number} photo_size Photo size in bytes
     * @param {string | number} photo_width Photo width
     * @param {string | number} photo_height Photo height
     * @param {boolean} need_name Pass True if you require the user's full name to complete the order
     * @param {boolean} need_phone_number Pass True if you require the user's phone number to complete the order
     * @param {boolean} need_email Pass True if you require the user's email address to complete the order
     * @param {boolean} need_shipping_address Pass True if you require the user's shipping address to complete the order
     * @param {boolean} send_phone_number_to_provider Pass True if the user's phone number should be sent to the provider
     * @param {boolean} send_email_to_provider Pass True if the user's email address should be sent to the provider
     * @param {boolean} is_flexible Pass True if the final price depends on the shipping method
     * @returns {Promise<string>}
     */
    async function createInvoiceLink(
        title: string,
        description: string,
        payload: string,
        provider_token: string,
        currency: string,
        prices: Array<LabeledPrice>,
        max_tip_amount?: string | number,
        suggested_tip_amounts?: Array<string | number>,
        provider_data?: string,
        photo_url?: string,
        photo_size?: string | number,
        photo_width?: string | number,
        photo_height?: string | number,
        need_name?: boolean,
        need_phone_number?: boolean,
        need_email?: boolean,
        need_shipping_address?: boolean,
        send_phone_number_to_provider?: boolean,
        send_email_to_provider?: boolean,
        is_flexible?: boolean
    ): Promise<string> {
        return await Test('createInvoiceLink', await get('createInvoiceLink', {
            title,
            description,
            payload,
            provider_token,
            currency,
            prices,
            max_tip_amount,
            suggested_tip_amounts,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible
        }))
    }
    
    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#answershippingquery
     * @param {string} shipping_query_id Unique identifier for the query to be answered
     * @param {boolean} ok Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
     * @param {Array<ShippingOption>} shipping_options Required if ok is True. A JSON-serialized array of available shipping options.
     * @param {string} error_message Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
     * @returns {Promise<boolean>}
     */
    async function answerShippingQuery(
        shipping_query_id: string,
        ok: boolean,
        shipping_options?: Array<ShippingOption>,
        error_message?: string
    ): Promise<boolean> {
        return await Test('answerShippingQuery', await get('answerShippingQuery', {
            shipping_query_id,
            ok,
            shipping_options,
            error_message
        }))
    }
    
    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     * 
     * Read more: https://core.telegram.org/bots/api#answerprecheckoutquery
     * @param {string} pre_checkout_query_id Unique identifier for the query to be answered
     * @param {boolean} ok Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
     * @param {string} error_message Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
     * @returns {Promise<boolean>}
     */
    async function answerPreCheckoutQuery(
        pre_checkout_query_id: string,
        ok: boolean,
        error_message?: string
    ): Promise<boolean> {
        return await Test('answerPreCheckoutQuery', await get('answerPreCheckoutQuery', {
            pre_checkout_query_id,
            ok,
            error_message
        }))
    }
    
    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
     * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
     * 
     * Read more: https://core.telegram.org/bots/api#setpassportdataerrors
     * @param {string | number} user_id User identifier
     * @param {Array<PassportElementError>} errors A JSON-serialized array describing the errors
     * @returns {Promise<boolean>}
     */
    async function setPassportDataErrors(
        user_id: string | number,
        errors: Array<PassportElementError>
    ): Promise<boolean> {
        return await Test('setPassportDataErrors', await get('setPassportDataErrors', {
            user_id,
            errors
        }))
    }
    
    /**
     * Use this method to send a game. On success, the sent Message is returned.
     * 
     * Read more: https://core.telegram.org/bots/api#sendgame
     * @param {string | number} chat_id Unique identifier for the target chat
     * @param {string} game_short_name Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
     * @param {string | number} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param {boolean} disable_notification Sends the message silently. Users will receive a notification with no sound.
     * @param {boolean} protect_content Protects the contents of the sent message from forwarding and saving
     * @param {string | number} reply_to_message_id If the message is a reply, ID of the original message
     * @param {boolean} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
     * @param {InlineKeyboardMarkup} reply_markup A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
     * @returns {Promise<Message>}
     */
    async function sendGame(
        chat_id: string | number,
        game_short_name: string,
        message_thread_id?: string | number,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_to_message_id?: string | number,
        allow_sending_without_reply?: boolean,
        reply_markup?: InlineKeyboardMarkup
    ): Promise<Message> {
        return await Test('sendGame', await get('sendGame', {
            chat_id,
            game_short_name,
            message_thread_id,
            disable_notification,
            protect_content,
            reply_to_message_id,
            allow_sending_without_reply,
            reply_markup
        }))
    }
    
    /**
     * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
     * 
     * Read more: https://core.telegram.org/bots/api#setgamescore
     * @param {string | number} user_id User identifier
     * @param {string | number} score New score, must be non-negative
     * @param {boolean} force Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
     * @param {boolean} disable_edit_message Pass True if the game message should not be automatically edited to include the current scoreboard
     * @param {string | number} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the sent message
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @returns {Promise<Message | boolean>}
     */
    async function setGameScore(
        user_id: string | number,
        score: string | number,
        force?: boolean,
        disable_edit_message?: boolean,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string
    ): Promise<Message | boolean> {
        return await Test('setGameScore', await get('setGameScore', {
            user_id,
            score,
            force,
            disable_edit_message,
            chat_id,
            message_id,
            inline_message_id
        }))
    }
    
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
     * 
     * Read more: https://core.telegram.org/bots/api#getgamehighscores
     * @param {string | number} user_id Target user id
     * @param {string | number} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat
     * @param {string | number} message_id Required if inline_message_id is not specified. Identifier of the sent message
     * @param {string} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
     * @returns {Promise<Array<GameHighScore>>}
     */
    async function getGameHighScores(
        user_id: string | number,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string
    ): Promise<Array<GameHighScore>> {
        return await Test('getGameHighScores', await get('getGameHighScores', {
            user_id,
            chat_id,
            message_id,
            inline_message_id
        }))
    }

    return { Test, login, get,
 getUpdates, setWebhook, deleteWebhook, getWebhookInfo, getMe, logOut, close, sendMessage, forwardMessage, copyMessage, sendPhoto, sendAudio, sendDocument, sendVideo, sendAnimation, sendVoice, sendVideoNote, sendMediaGroup, sendLocation, sendVenue, sendContact, sendPoll, sendDice, sendChatAction, getUserProfilePhotos, getFile, banChatMember, unbanChatMember, restrictChatMember, promoteChatMember, setChatAdministratorCustomTitle, banChatSenderChat, unbanChatSenderChat, setChatPermissions, exportChatInviteLink, createChatInviteLink, editChatInviteLink, revokeChatInviteLink, approveChatJoinRequest, declineChatJoinRequest, setChatPhoto, deleteChatPhoto, setChatTitle, setChatDescription, pinChatMessage, unpinChatMessage, unpinAllChatMessages, leaveChat, getChat, getChatAdministrators, getChatMemberCount, getChatMember, setChatStickerSet, deleteChatStickerSet, getForumTopicIconStickers, createForumTopic, editForumTopic, closeForumTopic, reopenForumTopic, deleteForumTopic, unpinAllForumTopicMessages, editGeneralForumTopic, closeGeneralForumTopic, reopenGeneralForumTopic, hideGeneralForumTopic, unhideGeneralForumTopic, answerCallbackQuery, setMyCommands, deleteMyCommands, getMyCommands, setMyName, getMyName, setMyDescription, getMyDescription, setMyShortDescription, getMyShortDescription, setChatMenuButton, getChatMenuButton, setMyDefaultAdministratorRights, getMyDefaultAdministratorRights, editMessageText, editMessageCaption, editMessageMedia, editMessageLiveLocation, stopMessageLiveLocation, editMessageReplyMarkup, stopPoll, deleteMessage, sendSticker, getStickerSet, getCustomEmojiStickers, uploadStickerFile, createNewStickerSet, addStickerToSet, setStickerPositionInSet, deleteStickerFromSet, setStickerEmojiList, setStickerKeywords, setStickerMaskPosition, setStickerSetTitle, setStickerSetThumbnail, setCustomEmojiStickerSetThumbnail, deleteStickerSet, answerInlineQuery, answerWebAppQuery, sendInvoice, createInvoiceLink, answerShippingQuery, answerPreCheckoutQuery, setPassportDataErrors, sendGame, setGameScore, getGameHighScores }
})

export const newBot = build
export default { newBot: build }