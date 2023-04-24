/* Telegram API wrapper for Javascript
 * By MinecraftPublisher
 * Auto-Scraped from https://core.telegram.org/bots/api
 */

let BASE = `https://api.telegram.org/bot`

/**
* Makes an HTTP GET request to the Telegram Bot API.
*/

async function get(url: string, args: { [key: string]: any } = {}): Promise<any> {
    let keys = Object.keys(args)?.filter(e => !!args[e])?.map((e) => {
        let value

        if (typeof args[e] === 'string') value = args[e]
        else encodeURI(JSON.stringify(args[e]))

        return `${e}=${value}`
    })

    return await fetch(`${BASE}${url}?` + keys?.join('&')).then((res) => res.json())
}

async function load(token: string): Promise<void> {
    BASE += `${token}/`
}

/**
 * Interface: Update
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 * 
 * Read more: https://core.telegram.org/bots/api#update
 */
interface Update {
    /* The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: Array<number>
    /* Optional. New incoming message of any kind - text, photo, sticker, etc. */
    message?: Array<Message>
    /* Optional. New version of a message that is known to the bot and was edited */
    edited_message?: Array<Message>
    /* Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
    channel_post?: Array<Message>
    /* Optional. New version of a channel post that is known to the bot and was edited */
    edited_channel_post?: Array<Message>
    /* Optional. New incoming inline query */
    inline_query?: Array<InlineQuery>
    /* Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    chosen_inline_result?: Array<ChosenInlineResult>
    /* Optional. New incoming callback query */
    callback_query?: Array<CallbackQuery>
    /* Optional. New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: Array<ShippingQuery>
    /* Optional. New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: Array<PreCheckoutQuery>
    /* Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll?: Array<Poll>
    /* Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    poll_answer?: Array<PollAnswer>
    /* Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    my_chat_member?: Array<ChatMemberUpdated>
    /* Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates. */
    chat_member?: Array<ChatMemberUpdated>
    /* Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
    chat_join_request?: Array<ChatJoinRequest>
}

/**
 * Interface: WebhookInfo
 * Describes the current status of a webhook.
 * 
 * Read more: https://core.telegram.org/bots/api#webhookinfo
 */
interface WebhookInfo {
    /* Webhook URL, may be empty if webhook is not set up */
    url: Array<string>
    /* True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: Array<boolean>
    /* Number of updates awaiting delivery */
    pending_update_count: Array<number>
    /* Optional. Currently used webhook IP address */
    ip_address?: Array<string>
    /* Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: Array<number>
    /* Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: Array<string>
    /* Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
    last_synchronization_error_date?: Array<number>
    /* Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connections?: Array<number>
    /* Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
    allowed_updates?: Array<Array<string>>
}

/**
 * Interface: User
 * This object represents a Telegram user or bot.
 * 
 * Read more: https://core.telegram.org/bots/api#user
 */
interface User {
    /* Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: Array<number>
    /* True, if this user is a bot */
    is_bot: Array<boolean>
    /* User's or bot's first name */
    first_name: Array<string>
    /* Optional. User's or bot's last name */
    last_name?: Array<string>
    /* Optional. User's or bot's username */
    username?: Array<string>
    /* Optional. IETF language tag of the user's language */
    language_code?: Array<string>
    /* Optional. True, if this user is a Telegram Premium user */
    is_premium?: Array<boolean>
    /* Optional. True, if this user added the bot to the attachment menu */
    added_to_attachment_menu?: Array<boolean>
    /* Optional. True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups?: Array<boolean>
    /* Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages?: Array<boolean>
    /* Optional. True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries?: Array<boolean>
}

/**
 * Interface: Chat
 * This object represents a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chat
 */
interface Chat {
    /* Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: Array<number>
    /* Type of chat, can be either "private", "group", "supergroup" or "channel" */
    type: Array<string>
    /* Optional. Title, for supergroups, channels and group chats */
    title?: Array<string>
    /* Optional. Username, for private chats, supergroups and channels if available */
    username?: Array<string>
    /* Optional. First name of the other party in a private chat */
    first_name?: Array<string>
    /* Optional. Last name of the other party in a private chat */
    last_name?: Array<string>
    /* Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: Array<boolean>
    /* Optional. Chat photo. Returned only in getChat. */
    photo?: Array<ChatPhoto>
    /* Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat. */
    active_usernames?: Array<Array<string>>
    /* Optional. Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat. */
    emoji_status_custom_emoji_id?: Array<string>
    /* Optional. Bio of the other party in a private chat. Returned only in getChat. */
    bio?: Array<string>
    /* Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat. */
    has_private_forwards?: Array<boolean>
    /* Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat. */
    has_restricted_voice_and_video_messages?: Array<boolean>
    /* Optional. True, if users need to join the supergroup before they can send messages. Returned only in getChat. */
    join_to_send_messages?: Array<boolean>
    /* Optional. True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat. */
    join_by_request?: Array<boolean>
    /* Optional. Description, for groups, supergroups and channel chats. Returned only in getChat. */
    description?: Array<string>
    /* Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
    invite_link?: Array<string>
    /* Optional. The most recent pinned message (by sending date). Returned only in getChat. */
    pinned_message?: Array<Message>
    /* Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat. */
    permissions?: Array<ChatPermissions>
    /* Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat. */
    slow_mode_delay?: Array<number>
    /* Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
    message_auto_delete_time?: Array<number>
    /* Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat. */
    has_aggressive_anti_spam_enabled?: Array<boolean>
    /* Optional. True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat. */
    has_hidden_members?: Array<boolean>
    /* Optional. True, if messages from the chat can't be forwarded to other chats. Returned only in getChat. */
    has_protected_content?: Array<boolean>
    /* Optional. For supergroups, name of group sticker set. Returned only in getChat. */
    sticker_set_name?: Array<string>
    /* Optional. True, if the bot can change the group sticker set. Returned only in getChat. */
    can_set_sticker_set?: Array<boolean>
    /* Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
    linked_chat_id?: Array<number>
    /* Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
    location?: Array<ChatLocation>
}

/**
 * Interface: Message
 * This object represents a message.
 * 
 * Read more: https://core.telegram.org/bots/api#message
 */
interface Message {
    /* Unique message identifier inside this chat */
    message_id: Array<number>
    /* Date the message was sent in Unix time */
    date: Array<number>
    /* Conversation the message belongs to */
    chat: Array<Chat>
    /* Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
    message_thread_id?: Array<number>
    /* Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    from?: Array<User>
    /* Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    sender_chat?: Array<Chat>
    /* Optional. For forwarded messages, sender of the original message */
    forward_from?: Array<User>
    /* Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
    forward_from_chat?: Array<Chat>
    /* Optional. For messages forwarded from channels, identifier of the original message in the channel */
    forward_from_message_id?: Array<number>
    /* Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
    forward_signature?: Array<string>
    /* Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_sender_name?: Array<string>
    /* Optional. For forwarded messages, date the original message was sent in Unix time */
    forward_date?: Array<number>
    /* Optional. True, if the message is sent to a forum topic */
    is_topic_message?: Array<boolean>
    /* Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    is_automatic_forward?: Array<boolean>
    /* Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message?: Array<Message>
    /* Optional. Bot through which the message was sent */
    via_bot?: Array<User>
    /* Optional. Date the message was last edited in Unix time */
    edit_date?: Array<number>
    /* Optional. True, if the message can't be forwarded */
    has_protected_content?: Array<boolean>
    /* Optional. The unique identifier of a media message group this message belongs to */
    media_group_id?: Array<string>
    /* Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature?: Array<string>
    /* Optional. For text messages, the actual UTF-8 text of the message */
    text?: Array<string>
    /* Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: Array<Array<MessageEntity>>
    /* Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation?: Array<Animation>
    /* Optional. Message is an audio file, information about the file */
    audio?: Array<Audio>
    /* Optional. Message is a general file, information about the file */
    document?: Array<Document>
    /* Optional. Message is a photo, available sizes of the photo */
    photo?: Array<Array<PhotoSize>>
    /* Optional. Message is a sticker, information about the sticker */
    sticker?: Array<Sticker>
    /* Optional. Message is a video, information about the video */
    video?: Array<Video>
    /* Optional. Message is a video note, information about the video message */
    video_note?: Array<VideoNote>
    /* Optional. Message is a voice message, information about the file */
    voice?: Array<Voice>
    /* Optional. Caption for the animation, audio, document, photo, video or voice */
    caption?: Array<string>
    /* Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: Array<boolean>
    /* Optional. Message is a shared contact, information about the contact */
    contact?: Array<Contact>
    /* Optional. Message is a dice with random value */
    dice?: Array<Dice>
    /* Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games */
    game?: Array<Game>
    /* Optional. Message is a native poll, information about the poll */
    poll?: Array<Poll>
    /* Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue?: Array<Venue>
    /* Optional. Message is a shared location, information about the location */
    location?: Array<Location>
    /* Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: Array<Array<User>>
    /* Optional. A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: Array<User>
    /* Optional. A chat title was changed to this value */
    new_chat_title?: Array<string>
    /* Optional. A chat photo was change to this value */
    new_chat_photo?: Array<Array<PhotoSize>>
    /* Optional. Service message: the chat photo was deleted */
    delete_chat_photo?: Array<boolean>
    /* Optional. Service message: the group has been created */
    group_chat_created?: Array<boolean>
    /* Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: Array<boolean>
    /* Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: Array<boolean>
    /* Optional. Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed?: Array<MessageAutoDeleteTimerChanged>
    /* Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: Array<number>
    /* Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: Array<number>
    /* Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
    pinned_message?: Array<Message>
    /* Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments */
    invoice?: Array<Invoice>
    /* Optional. Message is a service message about a successful payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments */
    successful_payment?: Array<SuccessfulPayment>
    /* Optional. Service message: a user was shared with the bot */
    user_shared?: Array<UserShared>
    /* Optional. Service message: a chat was shared with the bot */
    chat_shared?: Array<ChatShared>
    /* Optional. The domain name of the website on which the user has logged in. More about Telegram Login: https://core.telegram.org/widgets/login */
    connected_website?: Array<string>
    /* Optional. Service message: the user allowed the bot added to the attachment menu to write messages */
    write_access_allowed?: Array<WriteAccessAllowed>
    /* Optional. Telegram Passport data */
    passport_data?: Array<PassportData>
    /* Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered?: Array<ProximityAlertTriggered>
    /* Optional. Service message: forum topic created */
    forum_topic_created?: Array<ForumTopicCreated>
    /* Optional. Service message: forum topic edited */
    forum_topic_edited?: Array<ForumTopicEdited>
    /* Optional. Service message: forum topic closed */
    forum_topic_closed?: Array<ForumTopicClosed>
    /* Optional. Service message: forum topic reopened */
    forum_topic_reopened?: Array<ForumTopicReopened>
    /* Optional. Service message: the 'General' forum topic hidden */
    general_forum_topic_hidden?: Array<GeneralForumTopicHidden>
    /* Optional. Service message: the 'General' forum topic unhidden */
    general_forum_topic_unhidden?: Array<GeneralForumTopicUnhidden>
    /* Optional. Service message: video chat scheduled */
    video_chat_scheduled?: Array<VideoChatScheduled>
    /* Optional. Service message: video chat started */
    video_chat_started?: Array<VideoChatStarted>
    /* Optional. Service message: video chat ended */
    video_chat_ended?: Array<VideoChatEnded>
    /* Optional. Service message: new participants invited to a video chat */
    video_chat_participants_invited?: Array<VideoChatParticipantsInvited>
    /* Optional. Service message: data sent by a Web App */
    web_app_data?: Array<WebAppData>
    /* Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup?: Array<InlineKeyboardMarkup>
}

/**
 * Interface: MessageId
 * This object represents a unique message identifier.
 * 
 * Read more: https://core.telegram.org/bots/api#messageid
 */
interface MessageId {
    /* Unique message identifier */
    message_id: Array<number>
}

/**
 * Interface: MessageEntity
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * 
 * Read more: https://core.telegram.org/bots/api#messageentity
 */
interface MessageEntity {
    /* Type of the entity. Currently, can be "mention" (@username), "hashtag" (#hashtag), "cashtag" ($USD), "bot_command" (/start@jobs_bot), "url" (https://telegram.org), "email" (do-not-reply@telegram.org), "phone_number" (+1-212-555-0123), "bold" (bold text), "italic" (italic text), "underline" (underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler message), "code" (monowidth string), "pre" (monowidth block), "text_link" (for clickable text URLs), "text_mention" (for users without usernames), "custom_emoji" (for inline custom emoji stickers) */
    type: Array<string>
    /* Offset in UTF-16 code units to the start of the entity */
    offset: Array<number>
    /* Length of the entity in UTF-16 code units */
    length: Array<number>
    /* Optional. For "text_link" only, URL that will be opened after user taps on the text */
    url?: Array<string>
    /* Optional. For "text_mention" only, the mentioned user */
    user?: Array<User>
    /* Optional. For "pre" only, the programming language of the entity text */
    language?: Array<string>
    /* Optional. For "custom_emoji" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
    custom_emoji_id?: Array<string>
}

/**
 * Interface: PhotoSize
 * This object represents one size of a photo or a file / sticker thumbnail.
 * 
 * Read more: https://core.telegram.org/bots/api#photosize
 */
interface PhotoSize {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Photo width */
    width: Array<number>
    /* Photo height */
    height: Array<number>
    /* Optional. File size in bytes */
    file_size?: Array<number>
}

/**
 * Interface: Animation
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 * 
 * Read more: https://core.telegram.org/bots/api#animation
 */
interface Animation {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Video width as defined by sender */
    width: Array<number>
    /* Video height as defined by sender */
    height: Array<number>
    /* Duration of the video in seconds as defined by sender */
    duration: Array<number>
    /* Optional. Animation thumbnail as defined by sender */
    thumbnail?: Array<PhotoSize>
    /* Optional. Original animation filename as defined by sender */
    file_name?: Array<string>
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
}

/**
 * Interface: Audio
 * This object represents an audio file to be treated as music by the Telegram clients.
 * 
 * Read more: https://core.telegram.org/bots/api#audio
 */
interface Audio {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Duration of the audio in seconds as defined by sender */
    duration: Array<number>
    /* Optional. Performer of the audio as defined by sender or by audio tags */
    performer?: Array<string>
    /* Optional. Title of the audio as defined by sender or by audio tags */
    title?: Array<string>
    /* Optional. Original filename as defined by sender */
    file_name?: Array<string>
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
    /* Optional. Thumbnail of the album cover to which the music file belongs */
    thumbnail?: Array<PhotoSize>
}

/**
 * Interface: Document
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 * 
 * Read more: https://core.telegram.org/bots/api#document
 */
interface Document {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Optional. Document thumbnail as defined by sender */
    thumbnail?: Array<PhotoSize>
    /* Optional. Original filename as defined by sender */
    file_name?: Array<string>
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
}

/**
 * Interface: Video
 * This object represents a video file.
 * 
 * Read more: https://core.telegram.org/bots/api#video
 */
interface Video {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Video width as defined by sender */
    width: Array<number>
    /* Video height as defined by sender */
    height: Array<number>
    /* Duration of the video in seconds as defined by sender */
    duration: Array<number>
    /* Optional. Video thumbnail */
    thumbnail?: Array<PhotoSize>
    /* Optional. Original filename as defined by sender */
    file_name?: Array<string>
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
}

/**
 * Interface: VideoNote
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * 
 * Read more: https://core.telegram.org/bots/api#videonote
 */
interface VideoNote {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Video width and height (diameter of the video message) as defined by sender */
    length: Array<number>
    /* Duration of the video in seconds as defined by sender */
    duration: Array<number>
    /* Optional. Video thumbnail */
    thumbnail?: Array<PhotoSize>
    /* Optional. File size in bytes */
    file_size?: Array<number>
}

/**
 * Interface: Voice
 * This object represents a voice note.
 * 
 * Read more: https://core.telegram.org/bots/api#voice
 */
interface Voice {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Duration of the audio in seconds as defined by sender */
    duration: Array<number>
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
}

/**
 * Interface: Contact
 * This object represents a phone contact.
 * 
 * Read more: https://core.telegram.org/bots/api#contact
 */
interface Contact {
    /* Contact's phone number */
    phone_number: Array<string>
    /* Contact's first name */
    first_name: Array<string>
    /* Optional. Contact's last name */
    last_name?: Array<string>
    /* Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id?: Array<number>
    /* Optional. Additional data about the contact in the form of a vCard */
    vcard?: Array<string>
}

/**
 * Interface: Dice
 * This object represents an animated emoji that displays a random value.
 * 
 * Read more: https://core.telegram.org/bots/api#dice
 */
interface Dice {
    /* Emoji on which the dice throw animation is based */
    emoji: Array<string>
    /* Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji */
    value: Array<number>
}

/**
 * Interface: PollOption
 * This object contains information about one answer option in a poll.
 * 
 * Read more: https://core.telegram.org/bots/api#polloption
 */
interface PollOption {
    /* Option text, 1-100 characters */
    text: Array<string>
    /* Number of users that voted for this option */
    voter_count: Array<number>
}

/**
 * Interface: PollAnswer
 * This object represents an answer of a user in a non-anonymous poll.
 * 
 * Read more: https://core.telegram.org/bots/api#pollanswer
 */
interface PollAnswer {
    /* Unique poll identifier */
    poll_id: Array<string>
    /* The user, who changed the answer to the poll */
    user: Array<User>
    /* 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
    option_ids: Array<Array<number>>
}

/**
 * Interface: Poll
 * This object contains information about a poll.
 * 
 * Read more: https://core.telegram.org/bots/api#poll
 */
interface Poll {
    /* Unique poll identifier */
    id: Array<string>
    /* Poll question, 1-300 characters */
    question: Array<string>
    /* List of poll options */
    options: Array<Array<PollOption>>
    /* Total number of users that voted in the poll */
    total_voter_count: Array<number>
    /* True, if the poll is closed */
    is_closed: Array<boolean>
    /* True, if the poll is anonymous */
    is_anonymous: Array<boolean>
    /* Poll type, currently can be "regular" or "quiz" */
    type: Array<string>
    /* True, if the poll allows multiple answers */
    allows_multiple_answers: Array<boolean>
    /* Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id?: Array<number>
    /* Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation?: Array<string>
    /* Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities?: Array<Array<MessageEntity>>
    /* Optional. Amount of time in seconds the poll will be active after creation */
    open_period?: Array<number>
    /* Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date?: Array<number>
}

/**
 * Interface: Location
 * This object represents a point on the map.
 * 
 * Read more: https://core.telegram.org/bots/api#location
 */
interface Location {
    /* Longitude as defined by sender */
    longitude: Array<number>
    /* Latitude as defined by sender */
    latitude: Array<number>
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Array<number>
    /* Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    live_period?: Array<number>
    /* Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading?: Array<number>
    /* Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius?: Array<number>
}

/**
 * Interface: Venue
 * This object represents a venue.
 * 
 * Read more: https://core.telegram.org/bots/api#venue
 */
interface Venue {
    /* Venue location. Can't be a live location */
    location: Array<Location>
    /* Name of the venue */
    title: Array<string>
    /* Address of the venue */
    address: Array<string>
    /* Optional. Foursquare identifier of the venue */
    foursquare_id?: Array<string>
    /* Optional. Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: Array<string>
    /* Optional. Google Places identifier of the venue */
    google_place_id?: Array<string>
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: Array<string>
}

/**
 * Interface: WebAppData
 * Describes data sent from a Web App to the bot.
 * 
 * Read more: https://core.telegram.org/bots/api#webappdata
 */
interface WebAppData {
    /* The data. Be aware that a bad client can send arbitrary data in this field. */
    data: Array<string>
    /* Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
    button_text: Array<string>
}

/**
 * Interface: ProximityAlertTriggered
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * 
 * Read more: https://core.telegram.org/bots/api#proximityalerttriggered
 */
interface ProximityAlertTriggered {
    /* User that triggered the alert */
    traveler: Array<User>
    /* User that set the alert */
    watcher: Array<User>
    /* The distance between the users */
    distance: Array<number>
}

/**
 * Interface: MessageAutoDeleteTimerChanged
 * This object represents a service message about a change in auto-delete timer settings.
 * 
 * Read more: https://core.telegram.org/bots/api#messageautodeletetimerchanged
 */
interface MessageAutoDeleteTimerChanged {
    /* New auto-delete time for messages in the chat; in seconds */
    message_auto_delete_time: Array<number>
}

/**
 * Interface: ForumTopicCreated
 * This object represents a service message about a new forum topic created in the chat.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopiccreated
 */
interface ForumTopicCreated {
    /* Name of the topic */
    name: Array<string>
    /* Color of the topic icon in RGB format */
    icon_color: Array<number>
    /* Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: Array<string>
}

/**
 * Interface: ForumTopicClosed
 * This object represents a service message about a forum topic closed in the chat. Currently holds no information.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopicclosed
 */
interface ForumTopicClosed {

}

/**
 * Interface: ForumTopicEdited
 * This object represents a service message about an edited forum topic.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopicedited
 */
interface ForumTopicEdited {
    /* Optional. New name of the topic, if it was edited */
    name?: Array<string>
    /* Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
    icon_custom_emoji_id?: Array<string>
}

/**
 * Interface: ForumTopicReopened
 * This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopicreopened
 */
interface ForumTopicReopened {

}

/**
 * Interface: GeneralForumTopicHidden
 * This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
 * 
 * Read more: https://core.telegram.org/bots/api#generalforumtopichidden
 */
interface GeneralForumTopicHidden {

}

/**
 * Interface: GeneralForumTopicUnhidden
 * This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
 * 
 * Read more: https://core.telegram.org/bots/api#generalforumtopicunhidden
 */
interface GeneralForumTopicUnhidden {

}

/**
 * Interface: UserShared
 * This object contains information about the user whose identifier was shared with the bot using a KeyboardButtonRequestUser button.
 * 
 * Read more: https://core.telegram.org/bots/api#usershared
 */
interface UserShared {
    /* Identifier of the request */
    request_id: Array<number>
    /* Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
    user_id: Array<number>
}

/**
 * Interface: ChatShared
 * This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.
 * 
 * Read more: https://core.telegram.org/bots/api#chatshared
 */
interface ChatShared {
    /* Identifier of the request */
    request_id: Array<number>
    /* Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
    chat_id: Array<number>
}

/**
 * Interface: WriteAccessAllowed
 * This object represents a service message about a user allowing a bot to write messages after adding the bot to the attachment menu or launching a Web App from a link.
 * 
 * Read more: https://core.telegram.org/bots/api#writeaccessallowed
 */
interface WriteAccessAllowed {
    /* Optional. Name of the Web App which was launched from a link */
    web_app_name?: Array<string>
}

/**
 * Interface: VideoChatScheduled
 * This object represents a service message about a video chat scheduled in the chat.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatscheduled
 */
interface VideoChatScheduled {
    /* Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
    start_date: Array<number>
}

/**
 * Interface: VideoChatStarted
 * This object represents a service message about a video chat started in the chat. Currently holds no information.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatstarted
 */
interface VideoChatStarted {

}

/**
 * Interface: VideoChatEnded
 * This object represents a service message about a video chat ended in the chat.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatended
 */
interface VideoChatEnded {
    /* Video chat duration in seconds */
    duration: Array<number>
}

/**
 * Interface: VideoChatParticipantsInvited
 * This object represents a service message about new members invited to a video chat.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatparticipantsinvited
 */
interface VideoChatParticipantsInvited {
    /* New members that were invited to the video chat */
    users: Array<Array<User>>
}

/**
 * Interface: UserProfilePhotos
 * This object represent a user's profile pictures.
 * 
 * Read more: https://core.telegram.org/bots/api#userprofilephotos
 */
interface UserProfilePhotos {
    /* Total number of profile pictures the target user has */
    total_count: Array<number>
    /* Requested profile pictures (in up to 4 sizes each) */
    photos: Array<Array<Array<PhotoSize>>>
}

/**
 * Interface: File
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 * 
 * Read more: https://core.telegram.org/bots/api#file
 */
interface File {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: Array<number>
    /* Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path?: Array<string>
}

/**
 * Interface: WebAppInfo
 * Describes a Web App.
 * 
 * Read more: https://core.telegram.org/bots/api#webappinfo
 */
interface WebAppInfo {
    /* An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
    url: Array<string>
}

/**
 * Interface: ReplyKeyboardMarkup
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
 * 
 * Read more: https://core.telegram.org/bots/api#replykeyboardmarkup
 */
interface ReplyKeyboardMarkup {
    /* Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: Array<Array<Array<KeyboardButton>>>
    /* Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
    is_persistent?: Array<boolean>
    /* Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: Array<boolean>
    /* Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard?: Array<boolean>
    /* Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder?: Array<string>
    /* Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
    selective?: Array<boolean>
}

/**
 * Interface: KeyboardButton
 * This object represents one button of the reply keyboard. For simple text buttons, String can be used instead of this object to specify the button text. The optional fields web_app, request_user, request_chat, request_contact, request_location, and request_poll are mutually exclusive.
 * Note: request_contact and request_location options will only work in Telegram versions released after 9 April, 2016. Older clients will display unsupported message.
 * Note: request_poll option will only work in Telegram versions released after 23 January, 2020. Older clients will display unsupported message.
 * Note: web_app option will only work in Telegram versions released after 16 April, 2022. Older clients will display unsupported message.
 * Note: request_user and request_chat options will only work in Telegram versions released after 3 February, 2023. Older clients will display unsupported message.
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbutton
 */
interface KeyboardButton {
    /* Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: Array<string>
    /* Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a "user_shared" service message. Available in private chats only. */
    request_user?: Array<KeyboardButtonRequestUser>
    /* Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only. */
    request_chat?: Array<KeyboardButtonRequestChat>
    /* Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_contact?: Array<boolean>
    /* Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_location?: Array<boolean>
    /* Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    request_poll?: Array<KeyboardButtonPollType>
    /* Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only. */
    web_app?: Array<WebAppInfo>
}

/**
 * Interface: KeyboardButtonRequestUser
 * This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed. More about requesting users: https://core.telegram.org/bots/features#chat-and-user-selection
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonrequestuser
 */
interface KeyboardButtonRequestUser {
    /* Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message */
    request_id: Array<number>
    /* Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
    user_is_bot?: Array<boolean>
    /* Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
    user_is_premium?: Array<boolean>
}

/**
 * Interface: KeyboardButtonRequestChat
 * This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed. More about requesting chats: https://core.telegram.org/bots/features#chat-and-user-selection
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 */
interface KeyboardButtonRequestChat {
    /* Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
    request_id: Array<number>
    /* Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
    chat_is_channel: Array<boolean>
    /* Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
    chat_is_forum?: Array<boolean>
    /* Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
    chat_has_username?: Array<boolean>
    /* Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
    chat_is_created?: Array<boolean>
    /* Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
    user_administrator_rights?: Array<ChatAdministratorRights>
    /* Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_administrator_rights?: Array<ChatAdministratorRights>
    /* Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
    bot_is_member?: Array<boolean>
}

/**
 * Interface: KeyboardButtonPollType
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonpolltype
 */
interface KeyboardButtonPollType {
    /* Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type?: Array<string>
}

/**
 * Interface: ReplyKeyboardRemove
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
 * 
 * Read more: https://core.telegram.org/bots/api#replykeyboardremove
 */
interface ReplyKeyboardRemove {
    /* Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: Array<boolean>
    /* Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
    selective?: Array<boolean>
}

/**
 * Interface: InlineKeyboardMarkup
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will display unsupported message.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinekeyboardmarkup
 */
interface InlineKeyboardMarkup {
    /* Array of button rows, each represented by an Array of InlineKeyboardButton objects */
    inline_keyboard: Array<Array<Array<InlineKeyboardButton>>>
}

/**
 * Interface: InlineKeyboardButton
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
interface InlineKeyboardButton {
    /* Label text on the button */
    text: Array<string>
    /* Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
    url?: Array<string>
    /* Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    callback_data?: Array<string>
    /* Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
    web_app?: Array<WebAppInfo>
    /* Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url?: Array<LoginUrl>
    /* Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm... actions - in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. */
    switch_inline_query?: Array<string>
    /* Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. */
    switch_inline_query_current_chat?: Array<string>
    /* Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field */
    switch_inline_query_chosen_chat?: Array<SwitchInlineQueryChosenChat>
    /* Optional. Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row. */
    callback_game?: Array<CallbackGame>
    /* Optional. Specify True, to send a Pay button. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
    pay?: Array<boolean>
}

/**
 * Interface: LoginUrl
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 * Telegram apps support these buttons as of version 5.7.
 * 
 * Read more: https://core.telegram.org/bots/api#loginurl
 */
interface LoginUrl {
    /* An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
    url: Array<string>
    /* Optional. New text of the button in forwarded messages. */
    forward_text?: Array<string>
    /* Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username?: Array<string>
    /* Optional. Pass True to request the permission for your bot to send messages to the user. */
    request_write_access?: Array<boolean>
}

/**
 * Interface: SwitchInlineQueryChosenChat
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#switchinlinequerychosenchat
 */
interface SwitchInlineQueryChosenChat {
    /* Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
    query?: Array<string>
    /* Optional. True, if private chats with users can be chosen */
    allow_user_chats?: Array<boolean>
    /* Optional. True, if private chats with bots can be chosen */
    allow_bot_chats?: Array<boolean>
    /* Optional. True, if group and supergroup chats can be chosen */
    allow_group_chats?: Array<boolean>
    /* Optional. True, if channel chats can be chosen */
    allow_channel_chats?: Array<boolean>
}

/**
 * Interface: CallbackQuery
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 * 
 * Read more: https://core.telegram.org/bots/api#callbackquery
 */
interface CallbackQuery {
    /* Unique identifier for this query */
    id: Array<string>
    /* Sender */
    from: Array<User>
    /* Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: Array<string>
    /* Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message?: Array<Message>
    /* Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: Array<string>
    /* Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    data?: Array<string>
    /* Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name?: Array<string>
}

/**
 * Interface: ForceReply
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 * 
 * Read more: https://core.telegram.org/bots/api#forcereply
 */
interface ForceReply {
    /* Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: Array<boolean>
    /* Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder?: Array<string>
    /* Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
    selective?: Array<boolean>
}

/**
 * Interface: ChatPhoto
 * This object represents a chat photo.
 * 
 * Read more: https://core.telegram.org/bots/api#chatphoto
 */
interface ChatPhoto {
    /* File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: Array<string>
    /* Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: Array<string>
    /* File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: Array<string>
    /* Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: Array<string>
}

/**
 * Interface: ChatInviteLink
 * Represents an invite link for a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatinvitelink
 */
interface ChatInviteLink {
    /* The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with "...". */
    invite_link: Array<string>
    /* Creator of the link */
    creator: Array<User>
    /* True, if users joining the chat via the link need to be approved by chat administrators */
    creates_join_request: Array<boolean>
    /* True, if the link is primary */
    is_primary: Array<boolean>
    /* True, if the link is revoked */
    is_revoked: Array<boolean>
    /* Optional. Invite link name */
    name?: Array<string>
    /* Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date?: Array<number>
    /* Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: Array<number>
    /* Optional. Number of pending join requests created using this link */
    pending_join_request_count?: Array<number>
}

/**
 * Interface: ChatAdministratorRights
 * Represents the rights of an administrator in a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatadministratorrights
 */
interface ChatAdministratorRights {
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: Array<boolean>
    /* True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: Array<boolean>
    /* True, if the administrator can delete messages of other users */
    can_delete_messages: Array<boolean>
    /* True, if the administrator can manage video chats */
    can_manage_video_chats: Array<boolean>
    /* True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: Array<boolean>
    /* True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: Array<boolean>
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Array<boolean>
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: Array<boolean>
    /* Optional. True, if the administrator can post in the channel; channels only */
    can_post_messages?: Array<boolean>
    /* Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
    can_manage_topics?: Array<boolean>
}

/**
 * Interface: ChatMember
 * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 * - ChatMemberOwner
 * - ChatMemberAdministrator
 * - ChatMemberMember
 * - ChatMemberRestricted
 * - ChatMemberLeft
 * - ChatMemberBanned
 * 
 * Read more: https://core.telegram.org/bots/api#chatmember
 */
interface ChatMember {

}

/**
 * Interface: ChatMemberOwner
 * Represents a chat member that owns the chat and has all administrator privileges.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberowner
 */
interface ChatMemberOwner {
    /* The member's status in the chat, always "creator" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: Array<boolean>
    /* Optional. Custom title for this user */
    custom_title?: Array<string>
}

/**
 * Interface: ChatMemberAdministrator
 * Represents a chat member that has some additional privileges.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberadministrator
 */
interface ChatMemberAdministrator {
    /* The member's status in the chat, always "administrator" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
    /* True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: Array<boolean>
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: Array<boolean>
    /* True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: Array<boolean>
    /* True, if the administrator can delete messages of other users */
    can_delete_messages: Array<boolean>
    /* True, if the administrator can manage video chats */
    can_manage_video_chats: Array<boolean>
    /* True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: Array<boolean>
    /* True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: Array<boolean>
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Array<boolean>
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: Array<boolean>
    /* Optional. True, if the administrator can post in the channel; channels only */
    can_post_messages?: Array<boolean>
    /* Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
    can_manage_topics?: Array<boolean>
    /* Optional. Custom title for this user */
    custom_title?: Array<string>
}

/**
 * Interface: ChatMemberMember
 * Represents a chat member that has no additional privileges or restrictions.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmembermember
 */
interface ChatMemberMember {
    /* The member's status in the chat, always "member" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
}

/**
 * Interface: ChatMemberRestricted
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberrestricted
 */
interface ChatMemberRestricted {
    /* The member's status in the chat, always "restricted" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
    /* True, if the user is a member of the chat at the moment of the request */
    is_member: Array<boolean>
    /* True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_messages: Array<boolean>
    /* True, if the user is allowed to send audios */
    can_send_audios: Array<boolean>
    /* True, if the user is allowed to send documents */
    can_send_documents: Array<boolean>
    /* True, if the user is allowed to send photos */
    can_send_photos: Array<boolean>
    /* True, if the user is allowed to send videos */
    can_send_videos: Array<boolean>
    /* True, if the user is allowed to send video notes */
    can_send_video_notes: Array<boolean>
    /* True, if the user is allowed to send voice notes */
    can_send_voice_notes: Array<boolean>
    /* True, if the user is allowed to send polls */
    can_send_polls: Array<boolean>
    /* True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: Array<boolean>
    /* True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: Array<boolean>
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: Array<boolean>
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: Array<boolean>
    /* True, if the user is allowed to pin messages */
    can_pin_messages: Array<boolean>
    /* True, if the user is allowed to create forum topics */
    can_manage_topics: Array<boolean>
    /* Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever */
    until_date: Array<number>
}

/**
 * Interface: ChatMemberLeft
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberleft
 */
interface ChatMemberLeft {
    /* The member's status in the chat, always "left" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
}

/**
 * Interface: ChatMemberBanned
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberbanned
 */
interface ChatMemberBanned {
    /* The member's status in the chat, always "kicked" */
    status: Array<string>
    /* Information about the user */
    user: Array<User>
    /* Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever */
    until_date: Array<number>
}

/**
 * Interface: ChatMemberUpdated
 * This object represents changes in the status of a chat member.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberupdated
 */
interface ChatMemberUpdated {
    /* Chat the user belongs to */
    chat: Array<Chat>
    /* Performer of the action, which resulted in the change */
    from: Array<User>
    /* Date the change was done in Unix time */
    date: Array<number>
    /* Previous information about the chat member */
    old_chat_member: Array<ChatMember>
    /* New information about the chat member */
    new_chat_member: Array<ChatMember>
    /* Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link?: Array<ChatInviteLink>
    /* Optional. True, if the user joined the chat via a chat folder invite link */
    via_chat_folder_invite_link?: Array<boolean>
}

/**
 * Interface: ChatJoinRequest
 * Represents a join request sent to a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatjoinrequest
 */
interface ChatJoinRequest {
    /* Chat to which the request was sent */
    chat: Array<Chat>
    /* User that sent the join request */
    from: Array<User>
    /* Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 24 hours to send messages until the join request is processed, assuming no other administrator contacted the user. */
    user_chat_id: Array<number>
    /* Date the request was sent in Unix time */
    date: Array<number>
    /* Optional. Bio of the user. */
    bio?: Array<string>
    /* Optional. Chat invite link that was used by the user to send the join request */
    invite_link?: Array<ChatInviteLink>
}

/**
 * Interface: ChatPermissions
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatpermissions
 */
interface ChatPermissions {
    /* Optional. True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to send audios */
    can_send_audios?: Array<boolean>
    /* Optional. True, if the user is allowed to send documents */
    can_send_documents?: Array<boolean>
    /* Optional. True, if the user is allowed to send photos */
    can_send_photos?: Array<boolean>
    /* Optional. True, if the user is allowed to send videos */
    can_send_videos?: Array<boolean>
    /* Optional. True, if the user is allowed to send video notes */
    can_send_video_notes?: Array<boolean>
    /* Optional. True, if the user is allowed to send voice notes */
    can_send_voice_notes?: Array<boolean>
    /* Optional. True, if the user is allowed to send polls */
    can_send_polls?: Array<boolean>
    /* Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews?: Array<boolean>
    /* Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: Array<boolean>
    /* Optional. True, if the user is allowed to invite new users to the chat */
    can_invite_users?: Array<boolean>
    /* Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: Array<boolean>
    /* Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
    can_manage_topics?: Array<boolean>
}

/**
 * Interface: ChatLocation
 * Represents a location to which a chat is connected.
 * 
 * Read more: https://core.telegram.org/bots/api#chatlocation
 */
interface ChatLocation {
    /* The location to which the supergroup is connected. Can't be a live location. */
    location: Array<Location>
    /* Location address; 1-64 characters, as defined by the chat owner */
    address: Array<string>
}

/**
 * Interface: ForumTopic
 * This object represents a forum topic.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopic
 */
interface ForumTopic {
    /* Unique identifier of the forum topic */
    message_thread_id: Array<number>
    /* Name of the topic */
    name: Array<string>
    /* Color of the topic icon in RGB format */
    icon_color: Array<number>
    /* Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: Array<string>
}

/**
 * Interface: BotCommand
 * This object represents a bot command.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommand
 */
interface BotCommand {
    /* Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: Array<string>
    /* Description of the command; 1-256 characters. */
    description: Array<string>
}

/**
 * Interface: BotCommandScope
 * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
 * - BotCommandScopeDefault
 * - BotCommandScopeAllPrivateChats
 * - BotCommandScopeAllGroupChats
 * - BotCommandScopeAllChatAdministrators
 * - BotCommandScopeChat
 * - BotCommandScopeChatAdministrators
 * - BotCommandScopeChatMember
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscope
 */
interface BotCommandScope {

}

/**
 * Interface: BotCommandScopeDefault
 * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopedefault
 */
interface BotCommandScopeDefault {
    /* Scope type, must be default */
    type: Array<string>
}

/**
 * Interface: BotCommandScopeAllPrivateChats
 * Represents the scope of bot commands, covering all private chats.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallprivatechats
 */
interface BotCommandScopeAllPrivateChats {
    /* Scope type, must be all_private_chats */
    type: Array<string>
}

/**
 * Interface: BotCommandScopeAllGroupChats
 * Represents the scope of bot commands, covering all group and supergroup chats.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallgroupchats
 */
interface BotCommandScopeAllGroupChats {
    /* Scope type, must be all_group_chats */
    type: Array<string>
}

/**
 * Interface: BotCommandScopeAllChatAdministrators
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallchatadministrators
 */
interface BotCommandScopeAllChatAdministrators {
    /* Scope type, must be all_chat_administrators */
    type: Array<string>
}

/**
 * Interface: BotCommandScopeChat
 * Represents the scope of bot commands, covering a specific chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechat
 */
interface BotCommandScopeChat {
    /* Scope type, must be chat */
    type: Array<string>
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Array<number> | Array<string>
}

/**
 * Interface: BotCommandScopeChatAdministrators
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechatadministrators
 */
interface BotCommandScopeChatAdministrators {
    /* Scope type, must be chat_administrators */
    type: Array<string>
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Array<number> | Array<string>
}

/**
 * Interface: BotCommandScopeChatMember
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechatmember
 */
interface BotCommandScopeChatMember {
    /* Scope type, must be chat_member */
    type: Array<string>
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: Array<number> | Array<string>
    /* Unique identifier of the target user */
    user_id: Array<number>
}

/**
 * Interface: BotName
 * This object represents the bot's name.
 * 
 * Read more: https://core.telegram.org/bots/api#botname
 */
interface BotName {
    /* The bot's name */
    name: Array<string>
}

/**
 * Interface: BotDescription
 * This object represents the bot's description.
 * 
 * Read more: https://core.telegram.org/bots/api#botdescription
 */
interface BotDescription {
    /* The bot's description */
    description: Array<string>
}

/**
 * Interface: BotShortDescription
 * This object represents the bot's short description.
 * 
 * Read more: https://core.telegram.org/bots/api#botshortdescription
 */
interface BotShortDescription {
    /* The bot's short description */
    short_description: Array<string>
}

/**
 * Interface: MenuButton
 * This object describes the bot's menu button in a private chat. It should be one of
 * - MenuButtonCommands
 * - MenuButtonWebApp
 * - MenuButtonDefault
 * If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
 * 
 * Read more: https://core.telegram.org/bots/api#menubutton
 */
interface MenuButton {

}

/**
 * Interface: MenuButtonCommands
 * Represents a menu button, which opens the bot's list of commands.
 * 
 * Read more: https://core.telegram.org/bots/api#menubuttoncommands
 */
interface MenuButtonCommands {
    /* Type of the button, must be commands */
    type: Array<string>
}

/**
 * Interface: MenuButtonWebApp
 * Represents a menu button, which launches a Web App.
 * 
 * Read more: https://core.telegram.org/bots/api#menubuttonwebapp
 */
interface MenuButtonWebApp {
    /* Type of the button, must be web_app */
    type: Array<string>
    /* Text on the button */
    text: Array<string>
    /* Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. */
    web_app: Array<WebAppInfo>
}

/**
 * Interface: MenuButtonDefault
 * Describes that no specific value for the menu button was set.
 * 
 * Read more: https://core.telegram.org/bots/api#menubuttondefault
 */
interface MenuButtonDefault {
    /* Type of the button, must be default */
    type: Array<string>
}

/**
 * Interface: ResponseParameters
 * Describes why a request was unsuccessful.
 * 
 * Read more: https://core.telegram.org/bots/api#responseparameters
 */
interface ResponseParameters {
    /* Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: Array<number>
    /* Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: Array<number>
}

/**
 * Interface: InputMedia
 * This object represents the content of a media message to be sent. It should be one of
 * - InputMediaAnimation
 * - InputMediaDocument
 * - InputMediaAudio
 * - InputMediaPhoto
 * - InputMediaVideo
 * 
 * Read more: https://core.telegram.org/bots/api#inputmedia
 */
interface InputMedia {

}

/**
 * Interface: InputMediaPhoto
 * Represents a photo to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediaphoto
 */
interface InputMediaPhoto {
    /* Type of the result, must be photo */
    type: Array<string>
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: Array<string>
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: Array<boolean>
}

/**
 * Interface: InputMediaVideo
 * Represents a video to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediavideo
 */
interface InputMediaVideo {
    /* Type of the result, must be video */
    type: Array<string>
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: Array<string>
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: Array<InputFile> | Array<string>
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Video width */
    width?: Array<number>
    /* Optional. Video height */
    height?: Array<number>
    /* Optional. Video duration in seconds */
    duration?: Array<number>
    /* Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: Array<boolean>
    /* Optional. Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: Array<boolean>
}

/**
 * Interface: InputMediaAnimation
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediaanimation
 */
interface InputMediaAnimation {
    /* Type of the result, must be animation */
    type: Array<string>
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: Array<string>
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: Array<InputFile> | Array<string>
    /* Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Animation width */
    width?: Array<number>
    /* Optional. Animation height */
    height?: Array<number>
    /* Optional. Animation duration in seconds */
    duration?: Array<number>
    /* Optional. Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: Array<boolean>
}

/**
 * Interface: InputMediaAudio
 * Represents an audio file to be treated as music to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediaaudio
 */
interface InputMediaAudio {
    /* Type of the result, must be audio */
    type: Array<string>
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: Array<string>
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: Array<InputFile> | Array<string>
    /* Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Duration of the audio in seconds */
    duration?: Array<number>
    /* Optional. Performer of the audio */
    performer?: Array<string>
    /* Optional. Title of the audio */
    title?: Array<string>
}

/**
 * Interface: InputMediaDocument
 * Represents a general file to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediadocument
 */
interface InputMediaDocument {
    /* Type of the result, must be document */
    type: Array<string>
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: Array<string>
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: Array<InputFile> | Array<string>
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
    disable_content_type_detection?: Array<boolean>
}

/**
 * Interface: InputFile
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 * 
 * Read more: https://core.telegram.org/bots/api#inputfile
 */
interface InputFile {

}

/**
 * Interface: Sticker
 * This object represents a sticker.
 * 
 * Read more: https://core.telegram.org/bots/api#sticker
 */
interface Sticker {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* Type of the sticker, currently one of "regular", "mask", "custom_emoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    type: Array<string>
    /* Sticker width */
    width: Array<number>
    /* Sticker height */
    height: Array<number>
    /* True, if the sticker is animated */
    is_animated: Array<boolean>
    /* True, if the sticker is a video sticker */
    is_video: Array<boolean>
    /* Optional. Sticker thumbnail in the .WEBP or .JPG format */
    thumbnail?: Array<PhotoSize>
    /* Optional. Emoji associated with the sticker */
    emoji?: Array<string>
    /* Optional. Name of the sticker set to which the sticker belongs */
    set_name?: Array<string>
    /* Optional. For premium regular stickers, premium animation for the sticker */
    premium_animation?: Array<File>
    /* Optional. For mask stickers, the position where the mask should be placed */
    mask_position?: Array<MaskPosition>
    /* Optional. For custom emoji stickers, unique identifier of the custom emoji */
    custom_emoji_id?: Array<string>
    /* Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    needs_repainting?: Array<boolean>
    /* Optional. File size in bytes */
    file_size?: Array<number>
}

/**
 * Interface: StickerSet
 * This object represents a sticker set.
 * 
 * Read more: https://core.telegram.org/bots/api#stickerset
 */
interface StickerSet {
    /* Sticker set name */
    name: Array<string>
    /* Sticker set title */
    title: Array<string>
    /* Type of stickers in the set, currently one of "regular", "mask", "custom_emoji" */
    sticker_type: Array<string>
    /* True, if the sticker set contains animated stickers */
    is_animated: Array<boolean>
    /* True, if the sticker set contains video stickers */
    is_video: Array<boolean>
    /* List of all set stickers */
    stickers: Array<Array<Sticker>>
    /* Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
    thumbnail?: Array<PhotoSize>
}

/**
 * Interface: MaskPosition
 * This object describes the position on faces where a mask should be placed by default.
 * 
 * Read more: https://core.telegram.org/bots/api#maskposition
 */
interface MaskPosition {
    /* The part of the face relative to which the mask should be placed. One of "forehead", "eyes", "mouth", or "chin". */
    point: Array<string>
    /* Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: Array<number>
    /* Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: Array<number>
    /* Mask scaling coefficient. For example, 2.0 means double size. */
    scale: Array<number>
}

/**
 * Interface: InputSticker
 * This object describes a sticker to be added to a sticker set.
 * 
 * Read more: https://core.telegram.org/bots/api#inputsticker
 */
interface InputSticker {
    /* The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    sticker: Array<InputFile> | Array<string>
    /* List of 1-20 emoji associated with the sticker */
    emoji_list: Array<Array<string>>
    /* Optional. Position where the mask should be placed on faces. For "mask" stickers only. */
    mask_position?: Array<MaskPosition>
    /* Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For "regular" and "custom_emoji" stickers only. */
    keywords?: Array<Array<string>>
}

/**
 * Interface: InlineQuery
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequery
 */
interface InlineQuery {
    /* Unique identifier for this query */
    id: Array<string>
    /* Sender */
    from: Array<User>
    /* Text of the query (up to 256 characters) */
    query: Array<string>
    /* Offset of the results to be returned, can be controlled by the bot */
    offset: Array<string>
    /* Optional. Type of the chat from which the inline query was sent. Can be either "sender" for a private chat with the inline query sender, "private", "group", "supergroup", or "channel". The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type?: Array<string>
    /* Optional. Sender location, only for bots that request user location */
    location?: Array<Location>
}

/**
 * Interface: InlineQueryResultsButton
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultsbutton
 */
interface InlineQueryResultsButton {
    /* Label text on the button */
    text: Array<string>
    /* Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
    web_app?: Array<WebAppInfo>
    /* Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
    start_parameter?: Array<string>
}

/**
 * Interface: InlineQueryResult
 * This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
 * - InlineQueryResultCachedAudio
 * - InlineQueryResultCachedDocument
 * - InlineQueryResultCachedGif
 * - InlineQueryResultCachedMpeg4Gif
 * - InlineQueryResultCachedPhoto
 * - InlineQueryResultCachedSticker
 * - InlineQueryResultCachedVideo
 * - InlineQueryResultCachedVoice
 * - InlineQueryResultArticle
 * - InlineQueryResultAudio
 * - InlineQueryResultContact
 * - InlineQueryResultGame
 * - InlineQueryResultDocument
 * - InlineQueryResultGif
 * - InlineQueryResultLocation
 * - InlineQueryResultMpeg4Gif
 * - InlineQueryResultPhoto
 * - InlineQueryResultVenue
 * - InlineQueryResultVideo
 * - InlineQueryResultVoice
 * Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresult
 */
interface InlineQueryResult {

}

/**
 * Interface: InlineQueryResultArticle
 * Represents a link to an article or web page.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultarticle
 */
interface InlineQueryResultArticle {
    /* Type of the result, must be article */
    type: Array<string>
    /* Unique identifier for this result, 1-64 Bytes */
    id: Array<string>
    /* Title of the result */
    title: Array<string>
    /* Content of the message to be sent */
    input_message_content: Array<InputMessageContent>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. URL of the result */
    url?: Array<string>
    /* Optional. Pass True if you don't want the URL to be shown in the message */
    hide_url?: Array<boolean>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: Array<string>
    /* Optional. Thumbnail width */
    thumbnail_width?: Array<number>
    /* Optional. Thumbnail height */
    thumbnail_height?: Array<number>
}

/**
 * Interface: InlineQueryResultPhoto
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultphoto
 */
interface InlineQueryResultPhoto {
    /* Type of the result, must be photo */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    photo_url: Array<string>
    /* URL of the thumbnail for the photo */
    thumbnail_url: Array<string>
    /* Optional. Width of the photo */
    photo_width?: Array<number>
    /* Optional. Height of the photo */
    photo_height?: Array<number>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the photo */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultGif
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultgif
 */
interface InlineQueryResultGif {
    /* Type of the result, must be gif */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: Array<string>
    /* URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: Array<string>
    /* Optional. Width of the GIF */
    gif_width?: Array<number>
    /* Optional. Height of the GIF */
    gif_height?: Array<number>
    /* Optional. Duration of the GIF in seconds */
    gif_duration?: Array<number>
    /* Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg" */
    thumbnail_mime_type?: Array<string>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultMpeg4Gif
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
 */
interface InlineQueryResultMpeg4Gif {
    /* Type of the result, must be mpeg4_gif */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL for the MPEG4 file. File size must not exceed 1MB */
    mpeg4_url: Array<string>
    /* URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: Array<string>
    /* Optional. Video width */
    mpeg4_width?: Array<number>
    /* Optional. Video height */
    mpeg4_height?: Array<number>
    /* Optional. Video duration in seconds */
    mpeg4_duration?: Array<number>
    /* Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg" */
    thumbnail_mime_type?: Array<string>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultVideo
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultvideo
 */
interface InlineQueryResultVideo {
    /* Type of the result, must be video */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL for the embedded video player or video file */
    video_url: Array<string>
    /* MIME type of the content of the video URL, "text/html" or "video/mp4" */
    mime_type: Array<string>
    /* URL of the thumbnail (JPEG only) for the video */
    thumbnail_url: Array<string>
    /* Title for the result */
    title: Array<string>
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Video width */
    video_width?: Array<number>
    /* Optional. Video height */
    video_height?: Array<number>
    /* Optional. Video duration in seconds */
    video_duration?: Array<number>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultAudio
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultaudio
 */
interface InlineQueryResultAudio {
    /* Type of the result, must be audio */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL for the audio file */
    audio_url: Array<string>
    /* Title */
    title: Array<string>
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Performer */
    performer?: Array<string>
    /* Optional. Audio duration in seconds */
    audio_duration?: Array<number>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the audio */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultVoice
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultvoice
 */
interface InlineQueryResultVoice {
    /* Type of the result, must be voice */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid URL for the voice recording */
    voice_url: Array<string>
    /* Recording title */
    title: Array<string>
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Recording duration in seconds */
    voice_duration?: Array<number>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the voice recording */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultDocument
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultdocument
 */
interface InlineQueryResultDocument {
    /* Type of the result, must be document */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* Title for the result */
    title: Array<string>
    /* A valid URL for the file */
    document_url: Array<string>
    /* MIME type of the content of the file, either "application/pdf" or "application/zip" */
    mime_type: Array<string>
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the file */
    input_message_content?: Array<InputMessageContent>
    /* Optional. URL of the thumbnail (JPEG only) for the file */
    thumbnail_url?: Array<string>
    /* Optional. Thumbnail width */
    thumbnail_width?: Array<number>
    /* Optional. Thumbnail height */
    thumbnail_height?: Array<number>
}

/**
 * Interface: InlineQueryResultLocation
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultlocation
 */
interface InlineQueryResultLocation {
    /* Type of the result, must be location */
    type: Array<string>
    /* Unique identifier for this result, 1-64 Bytes */
    id: Array<string>
    /* Location latitude in degrees */
    latitude: Array<number>
    /* Location longitude in degrees */
    longitude: Array<number>
    /* Location title */
    title: Array<string>
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Array<number>
    /* Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: Array<number>
    /* Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Array<number>
    /* Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Array<number>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the location */
    input_message_content?: Array<InputMessageContent>
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: Array<string>
    /* Optional. Thumbnail width */
    thumbnail_width?: Array<number>
    /* Optional. Thumbnail height */
    thumbnail_height?: Array<number>
}

/**
 * Interface: InlineQueryResultVenue
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultvenue
 */
interface InlineQueryResultVenue {
    /* Type of the result, must be venue */
    type: Array<string>
    /* Unique identifier for this result, 1-64 Bytes */
    id: Array<string>
    /* Latitude of the venue location in degrees */
    latitude: Array<number>
    /* Longitude of the venue location in degrees */
    longitude: Array<number>
    /* Title of the venue */
    title: Array<string>
    /* Address of the venue */
    address: Array<string>
    /* Optional. Foursquare identifier of the venue if known */
    foursquare_id?: Array<string>
    /* Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: Array<string>
    /* Optional. Google Places identifier of the venue */
    google_place_id?: Array<string>
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the venue */
    input_message_content?: Array<InputMessageContent>
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: Array<string>
    /* Optional. Thumbnail width */
    thumbnail_width?: Array<number>
    /* Optional. Thumbnail height */
    thumbnail_height?: Array<number>
}

/**
 * Interface: InlineQueryResultContact
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcontact
 */
interface InlineQueryResultContact {
    /* Type of the result, must be contact */
    type: Array<string>
    /* Unique identifier for this result, 1-64 Bytes */
    id: Array<string>
    /* Contact's phone number */
    phone_number: Array<string>
    /* Contact's first name */
    first_name: Array<string>
    /* Optional. Contact's last name */
    last_name?: Array<string>
    /* Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the contact */
    input_message_content?: Array<InputMessageContent>
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: Array<string>
    /* Optional. Thumbnail width */
    thumbnail_width?: Array<number>
    /* Optional. Thumbnail height */
    thumbnail_height?: Array<number>
}

/**
 * Interface: InlineQueryResultGame
 * Represents a Game.
 * Note: This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultgame
 */
interface InlineQueryResultGame {
    /* Type of the result, must be game */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* Short name of the game */
    game_short_name: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
}

/**
 * Interface: InlineQueryResultCachedPhoto
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 */
interface InlineQueryResultCachedPhoto {
    /* Type of the result, must be photo */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier of the photo */
    photo_file_id: Array<string>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the photo */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedGif
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedgif
 */
interface InlineQueryResultCachedGif {
    /* Type of the result, must be gif */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier for the GIF file */
    gif_file_id: Array<string>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedMpeg4Gif
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
 */
interface InlineQueryResultCachedMpeg4Gif {
    /* Type of the result, must be mpeg4_gif */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier for the MPEG4 file */
    mpeg4_file_id: Array<string>
    /* Optional. Title for the result */
    title?: Array<string>
    /* Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedSticker
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 * Note: This will only work in Telegram versions released after 9 April, 2016 for static stickers and after 06 July, 2019 for animated stickers. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 */
interface InlineQueryResultCachedSticker {
    /* Type of the result, must be sticker */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier of the sticker */
    sticker_file_id: Array<string>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the sticker */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedDocument
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
 */
interface InlineQueryResultCachedDocument {
    /* Type of the result, must be document */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* Title for the result */
    title: Array<string>
    /* A valid file identifier for the file */
    document_file_id: Array<string>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the file */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedVideo
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
 */
interface InlineQueryResultCachedVideo {
    /* Type of the result, must be video */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier for the video file */
    video_file_id: Array<string>
    /* Title for the result */
    title: Array<string>
    /* Optional. Short description of the result */
    description?: Array<string>
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the video */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedVoice
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
 */
interface InlineQueryResultCachedVoice {
    /* Type of the result, must be voice */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier for the voice message */
    voice_file_id: Array<string>
    /* Voice message title */
    title: Array<string>
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the voice message */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InlineQueryResultCachedAudio
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
 */
interface InlineQueryResultCachedAudio {
    /* Type of the result, must be audio */
    type: Array<string>
    /* Unique identifier for this result, 1-64 bytes */
    id: Array<string>
    /* A valid file identifier for the audio file */
    audio_file_id: Array<string>
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: Array<string>
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<Array<MessageEntity>>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: Array<InlineKeyboardMarkup>
    /* Optional. Content of the message to be sent instead of the audio */
    input_message_content?: Array<InputMessageContent>
}

/**
 * Interface: InputMessageContent
 * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
 * - InputTextMessageContent
 * - InputLocationMessageContent
 * - InputVenueMessageContent
 * - InputContactMessageContent
 * - InputInvoiceMessageContent
 * 
 * Read more: https://core.telegram.org/bots/api#inputmessagecontent
 */
interface InputMessageContent {

}

/**
 * Interface: InputTextMessageContent
 * Represents the content of a text message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputtextmessagecontent
 */
interface InputTextMessageContent {
    /* Text of the message to be sent, 1-4096 characters */
    message_text: Array<string>
    /* Optional. Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: Array<string>
    /* Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: Array<Array<MessageEntity>>
    /* Optional. Disables link previews for links in the sent message */
    disable_web_page_preview?: Array<boolean>
}

/**
 * Interface: InputLocationMessageContent
 * Represents the content of a location message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputlocationmessagecontent
 */
interface InputLocationMessageContent {
    /* Latitude of the location in degrees */
    latitude: Array<number>
    /* Longitude of the location in degrees */
    longitude: Array<number>
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: Array<number>
    /* Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: Array<number>
    /* Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: Array<number>
    /* Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: Array<number>
}

/**
 * Interface: InputVenueMessageContent
 * Represents the content of a venue message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputvenuemessagecontent
 */
interface InputVenueMessageContent {
    /* Latitude of the venue in degrees */
    latitude: Array<number>
    /* Longitude of the venue in degrees */
    longitude: Array<number>
    /* Name of the venue */
    title: Array<string>
    /* Address of the venue */
    address: Array<string>
    /* Optional. Foursquare identifier of the venue, if known */
    foursquare_id?: Array<string>
    /* Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: Array<string>
    /* Optional. Google Places identifier of the venue */
    google_place_id?: Array<string>
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: Array<string>
}

/**
 * Interface: InputContactMessageContent
 * Represents the content of a contact message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
interface InputContactMessageContent {
    /* Contact's phone number */
    phone_number: Array<string>
    /* Contact's first name */
    first_name: Array<string>
    /* Optional. Contact's last name */
    last_name?: Array<string>
    /* Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: Array<string>
}

/**
 * Interface: InputInvoiceMessageContent
 * Represents the content of an invoice message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputinvoicemessagecontent
 */
interface InputInvoiceMessageContent {
    /* Product name, 1-32 characters */
    title: Array<string>
    /* Product description, 1-255 characters */
    description: Array<string>
    /* Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: Array<string>
    /* Payment provider token, obtained via @BotFather */
    provider_token: Array<string>
    /* Three-letter ISO 4217 currency code, see more on currencies */
    currency: Array<string>
    /* Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
    prices: Array<Array<LabeledPrice>>
    /* Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
    max_tip_amount?: Array<number>
    /* Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Array<Array<number>>
    /* Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data?: Array<string>
    /* Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: Array<string>
    /* Optional. Photo size in bytes */
    photo_size?: Array<number>
    /* Optional. Photo width */
    photo_width?: Array<number>
    /* Optional. Photo height */
    photo_height?: Array<number>
    /* Optional. Pass True if you require the user's full name to complete the order */
    need_name?: Array<boolean>
    /* Optional. Pass True if you require the user's phone number to complete the order */
    need_phone_number?: Array<boolean>
    /* Optional. Pass True if you require the user's email address to complete the order */
    need_email?: Array<boolean>
    /* Optional. Pass True if you require the user's shipping address to complete the order */
    need_shipping_address?: Array<boolean>
    /* Optional. Pass True if the user's phone number should be sent to provider */
    send_phone_number_to_provider?: Array<boolean>
    /* Optional. Pass True if the user's email address should be sent to provider */
    send_email_to_provider?: Array<boolean>
    /* Optional. Pass True if the final price depends on the shipping method */
    is_flexible?: Array<boolean>
}

/**
 * Interface: ChosenInlineResult
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 * Note: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates.
 * 
 * Read more: https://core.telegram.org/bots/api#choseninlineresult
 */
interface ChosenInlineResult {
    /* The unique identifier for the result that was chosen */
    result_id: Array<string>
    /* The user that chose the result */
    from: Array<User>
    /* The query that was used to obtain the result */
    query: Array<string>
    /* Optional. Sender location, only for bots that require user location */
    location?: Array<Location>
    /* Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id?: Array<string>
}

/**
 * Interface: SentWebAppMessage
 * Describes an inline message sent by a Web App on behalf of a user.
 * 
 * Read more: https://core.telegram.org/bots/api#sentwebappmessage
 */
interface SentWebAppMessage {
    /* Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
    inline_message_id?: Array<string>
}

/**
 * Interface: LabeledPrice
 * This object represents a portion of the price for goods or services.
 * 
 * Read more: https://core.telegram.org/bots/api#labeledprice
 */
interface LabeledPrice {
    /* Portion label */
    label: Array<string>
    /* Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: Array<number>
}

/**
 * Interface: Invoice
 * This object contains basic information about an invoice.
 * 
 * Read more: https://core.telegram.org/bots/api#invoice
 */
interface Invoice {
    /* Product name */
    title: Array<string>
    /* Product description */
    description: Array<string>
    /* Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: Array<string>
    /* Three-letter ISO 4217 currency code */
    currency: Array<string>
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Array<number>
}

/**
 * Interface: ShippingAddress
 * This object represents a shipping address.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingaddress
 */
interface ShippingAddress {
    /* Two-letter ISO 3166-1 alpha-2 country code */
    country_code: Array<string>
    /* State, if applicable */
    state: Array<string>
    /* City */
    city: Array<string>
    /* First line for the address */
    street_line1: Array<string>
    /* Second line for the address */
    street_line2: Array<string>
    /* Address post code */
    post_code: Array<string>
}

/**
 * Interface: OrderInfo
 * This object represents information about an order.
 * 
 * Read more: https://core.telegram.org/bots/api#orderinfo
 */
interface OrderInfo {
    /* Optional. User name */
    name?: Array<string>
    /* Optional. User's phone number */
    phone_number?: Array<string>
    /* Optional. User email */
    email?: Array<string>
    /* Optional. User shipping address */
    shipping_address?: Array<ShippingAddress>
}

/**
 * Interface: ShippingOption
 * This object represents one shipping option.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingoption
 */
interface ShippingOption {
    /* Shipping option identifier */
    id: Array<string>
    /* Option title */
    title: Array<string>
    /* List of price portions */
    prices: Array<Array<LabeledPrice>>
}

/**
 * Interface: SuccessfulPayment
 * This object contains basic information about a successful payment.
 * 
 * Read more: https://core.telegram.org/bots/api#successfulpayment
 */
interface SuccessfulPayment {
    /* Three-letter ISO 4217 currency code */
    currency: Array<string>
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Array<number>
    /* Bot specified invoice payload */
    invoice_payload: Array<string>
    /* Telegram payment identifier */
    telegram_payment_charge_id: Array<string>
    /* Provider payment identifier */
    provider_payment_charge_id: Array<string>
    /* Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: Array<string>
    /* Optional. Order information provided by the user */
    order_info?: Array<OrderInfo>
}

/**
 * Interface: ShippingQuery
 * This object contains information about an incoming shipping query.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingquery
 */
interface ShippingQuery {
    /* Unique query identifier */
    id: Array<string>
    /* User who sent the query */
    from: Array<User>
    /* Bot specified invoice payload */
    invoice_payload: Array<string>
    /* User specified shipping address */
    shipping_address: Array<ShippingAddress>
}

/**
 * Interface: PreCheckoutQuery
 * This object contains information about an incoming pre-checkout query.
 * 
 * Read more: https://core.telegram.org/bots/api#precheckoutquery
 */
interface PreCheckoutQuery {
    /* Unique query identifier */
    id: Array<string>
    /* User who sent the query */
    from: Array<User>
    /* Three-letter ISO 4217 currency code */
    currency: Array<string>
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: Array<number>
    /* Bot specified invoice payload */
    invoice_payload: Array<string>
    /* Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: Array<string>
    /* Optional. Order information provided by the user */
    order_info?: Array<OrderInfo>
}

/**
 * Interface: PassportData
 * Describes Telegram Passport data shared with the bot by the user.
 * 
 * Read more: https://core.telegram.org/bots/api#passportdata
 */
interface PassportData {
    /* Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: Array<Array<EncryptedPassportElement>>
    /* Encrypted credentials required to decrypt the data */
    credentials: Array<EncryptedCredentials>
}

/**
 * Interface: PassportFile
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 * 
 * Read more: https://core.telegram.org/bots/api#passportfile
 */
interface PassportFile {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: Array<string>
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: Array<string>
    /* File size in bytes */
    file_size: Array<number>
    /* Unix time when the file was uploaded */
    file_date: Array<number>
}

/**
 * Interface: EncryptedPassportElement
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 * 
 * Read more: https://core.telegram.org/bots/api#encryptedpassportelement
 */
interface EncryptedPassportElement {
    /* Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", "email". */
    type: Array<string>
    /* Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: Array<string>
    /* Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data?: Array<string>
    /* Optional. User's verified phone number, available only for "phone_number" type */
    phone_number?: Array<string>
    /* Optional. User's verified email address, available only for "email" type */
    email?: Array<string>
    /* Optional. Array of encrypted files with documents provided by the user, available for "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files?: Array<Array<PassportFile>>
    /* Optional. Encrypted file with the front side of the document, provided by the user. Available for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: Array<PassportFile>
    /* Optional. Encrypted file with the reverse side of the document, provided by the user. Available for "driver_license" and "identity_card". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: Array<PassportFile>
    /* Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: Array<PassportFile>
    /* Optional. Array of encrypted files with translated versions of documents provided by the user. Available if requested for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: Array<Array<PassportFile>>
}

/**
 * Interface: EncryptedCredentials
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 * 
 * Read more: https://core.telegram.org/bots/api#encryptedcredentials
 */
interface EncryptedCredentials {
    /* Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: Array<string>
    /* Base64-encoded data hash for data authentication */
    hash: Array<string>
    /* Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: Array<string>
}

/**
 * Interface: PassportElementError
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 * - PassportElementErrorDataField
 * - PassportElementErrorFrontSide
 * - PassportElementErrorReverseSide
 * - PassportElementErrorSelfie
 * - PassportElementErrorFile
 * - PassportElementErrorFiles
 * - PassportElementErrorTranslationFile
 * - PassportElementErrorTranslationFiles
 * - PassportElementErrorUnspecified
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerror
 */
interface PassportElementError {

}

/**
 * Interface: PassportElementErrorDataField
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrordatafield
 */
interface PassportElementErrorDataField {
    /* Error source, must be data */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the error, one of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address" */
    type: Array<string>
    /* Name of the data field which has the error */
    field_name: Array<string>
    /* Base64-encoded data hash */
    data_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorFrontSide
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
interface PassportElementErrorFrontSide {
    /* Error source, must be front_side */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport" */
    type: Array<string>
    /* Base64-encoded hash of the file with the front side of the document */
    file_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorReverseSide
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
interface PassportElementErrorReverseSide {
    /* Error source, must be reverse_side */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the issue, one of "driver_license", "identity_card" */
    type: Array<string>
    /* Base64-encoded hash of the file with the reverse side of the document */
    file_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorSelfie
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorselfie
 */
interface PassportElementErrorSelfie {
    /* Error source, must be selfie */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport" */
    type: Array<string>
    /* Base64-encoded hash of the file with the selfie */
    file_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorFile
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfile
 */
interface PassportElementErrorFile {
    /* Error source, must be file */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: Array<string>
    /* Base64-encoded file hash */
    file_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorFiles
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfiles
 */
interface PassportElementErrorFiles {
    /* Error source, must be files */
    source: Array<string>
    /* The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: Array<string>
    /* List of base64-encoded file hashes */
    file_hashes: Array<Array<string>>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorTranslationFile
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
interface PassportElementErrorTranslationFile {
    /* Error source, must be translation_file */
    source: Array<string>
    /* Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: Array<string>
    /* Base64-encoded file hash */
    file_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorTranslationFiles
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 */
interface PassportElementErrorTranslationFiles {
    /* Error source, must be translation_files */
    source: Array<string>
    /* Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: Array<string>
    /* List of base64-encoded file hashes */
    file_hashes: Array<Array<string>>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: PassportElementErrorUnspecified
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorunspecified
 */
interface PassportElementErrorUnspecified {
    /* Error source, must be unspecified */
    source: Array<string>
    /* Type of element of the user's Telegram Passport which has the issue */
    type: Array<string>
    /* Base64-encoded element hash */
    element_hash: Array<string>
    /* Error message */
    message: Array<string>
}

/**
 * Interface: Game
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * 
 * Read more: https://core.telegram.org/bots/api#game
 */
interface Game {
    /* Title of the game */
    title: Array<string>
    /* Description of the game */
    description: Array<string>
    /* Photo that will be displayed in the game message in chats. */
    photo: Array<Array<PhotoSize>>
    /* Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text?: Array<string>
    /* Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities?: Array<Array<MessageEntity>>
    /* Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation?: Array<Animation>
}

/**
 * Interface: CallbackGame
 * A placeholder, currently holds no information. Use BotFather to set up your game.
 * 
 * Read more: https://core.telegram.org/bots/api#callbackgame
 */
interface CallbackGame {

}

/**
 * Interface: GameHighScore
 * This object represents one row of the high scores table for a game.
 * 
 * Read more: https://core.telegram.org/bots/api#gamehighscore
 */
interface GameHighScore {
    /* Position in high score table for the game */
    position: Array<number>
    /* User */
    user: Array<User>
    /* Score */
    score: Array<number>
}

/**
 * Function: getUpdates
 * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
 * 
 * Read more: https://core.telegram.org/bots/api#getupdates
 * @param {Array<number>} offset Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
 * @param {Array<number>} limit Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 * @param {Array<number>} timeout Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
 * @param {Array<Array<string>>} allowed_updates A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
 * @returns {Promise<Array<Array<Update>>>}
 */
async function getUpdates(
    offset?: Array<number>, 
    limit?: Array<number>, 
    timeout?: Array<number>, 
    allowed_updates?: Array<Array<string>>
): Promise<Array<Array<Update>>> {
    return await get('getUpdates', {
        offset, 
        limit, 
        timeout, 
        allowed_updates
    })
}

/**
 * Function: setWebhook
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
 * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header "X-Telegram-Bot-Api-Secret-Token" with the secret token as content.
 * 
 * Read more: https://core.telegram.org/bots/api#setwebhook
 * @param {Array<string>} url HTTPS URL to send updates to. Use an empty string to remove webhook integration
 * @param {Array<InputFile>} certificate Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
 * @param {Array<string>} ip_address The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
 * @param {Array<number>} max_connections The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
 * @param {Array<Array<string>>} allowed_updates A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
 * @param {Array<boolean>} drop_pending_updates Pass True to drop all pending updates
 * @param {Array<string>} secret_token A secret token to be sent in a header "X-Telegram-Bot-Api-Secret-Token" in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
 * @returns {Promise<Array<boolean>>}
 */
async function setWebhook(
    url: Array<string>, 
    certificate?: Array<InputFile>, 
    ip_address?: Array<string>, 
    max_connections?: Array<number>, 
    allowed_updates?: Array<Array<string>>, 
    drop_pending_updates?: Array<boolean>, 
    secret_token?: Array<string>
): Promise<Array<boolean>> {
    return await get('setWebhook', {
        url, 
        certificate, 
        ip_address, 
        max_connections, 
        allowed_updates, 
        drop_pending_updates, 
        secret_token
    })
}

/**
 * Function: deleteWebhook
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletewebhook
 * @param {Array<boolean>} drop_pending_updates Pass True to drop all pending updates
 * @returns {Promise<Array<boolean>>}
 */
async function deleteWebhook(
    drop_pending_updates?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('deleteWebhook', {
        drop_pending_updates
    })
}

/**
 * Function: getWebhookInfo
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
 * 
 * Read more: https://core.telegram.org/bots/api#getwebhookinfo * @returns {Promise<Array<WebhookInfo>>}
 */
async function getWebhookInfo(): Promise<Array<WebhookInfo>> {
    return await get('getWebhookInfo')
}

/**
 * Function: getMe
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
 * 
 * Read more: https://core.telegram.org/bots/api#getme * @returns {Promise<Array<User>>}
 */
async function getMe(): Promise<Array<User>> {
    return await get('getMe')
}

/**
 * Function: logOut
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
 * 
 * Read more: https://core.telegram.org/bots/api#logout * @returns {Promise<Array<boolean>>}
 */
async function logOut(): Promise<Array<boolean>> {
    return await get('logOut')
}

/**
 * Function: close
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
 * 
 * Read more: https://core.telegram.org/bots/api#close * @returns {Promise<Array<boolean>>}
 */
async function close(): Promise<Array<boolean>> {
    return await get('close')
}

/**
 * Function: sendMessage
 * Use this method to send text messages. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendmessage
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} text Text of the message to be sent, 1-4096 characters after entities parsing
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} parse_mode Mode for parsing entities in the message text. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} entities A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
 * @param {Array<boolean>} disable_web_page_preview Disables link previews for links in this message
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendMessage(
    chat_id: Array<number> | Array<string>, 
    text: Array<string>, 
    message_thread_id?: Array<number>, 
    parse_mode?: Array<string>, 
    entities?: Array<Array<MessageEntity>>, 
    disable_web_page_preview?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendMessage', {
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
    })
}

/**
 * Function: forwardMessage
 * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#forwardmessage
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number> | Array<string>} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
 * @param {Array<number>} message_id Message identifier in the chat specified in from_chat_id
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the forwarded message from forwarding and saving
 * @returns {Promise<Array<Message>>}
 */
async function forwardMessage(
    chat_id: Array<number> | Array<string>, 
    from_chat_id: Array<number> | Array<string>, 
    message_id: Array<number>, 
    message_thread_id?: Array<number>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>
): Promise<Array<Message>> {
    return await get('forwardMessage', {
        chat_id, 
        from_chat_id, 
        message_id, 
        message_thread_id, 
        disable_notification, 
        protect_content
    })
}

/**
 * Function: copyMessage
 * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
 * 
 * Read more: https://core.telegram.org/bots/api#copymessage
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number> | Array<string>} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
 * @param {Array<number>} message_id Message identifier in the chat specified in from_chat_id
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} caption New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
 * @param {Array<string>} parse_mode Mode for parsing entities in the new caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<MessageId>>}
 */
async function copyMessage(
    chat_id: Array<number> | Array<string>, 
    from_chat_id: Array<number> | Array<string>, 
    message_id: Array<number>, 
    message_thread_id?: Array<number>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<MessageId>> {
    return await get('copyMessage', {
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
    })
}

/**
 * Function: sendPhoto
 * Use this method to send photos. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendphoto
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} photo Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} caption Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the photo caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<boolean>} has_spoiler Pass True if the photo needs to be covered with a spoiler animation
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendPhoto(
    chat_id: Array<number> | Array<string>, 
    photo: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    has_spoiler?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendPhoto', {
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
    })
}

/**
 * Function: sendAudio
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * For sending voice messages, use the sendVoice method instead.
 * 
 * Read more: https://core.telegram.org/bots/api#sendaudio
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} audio Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} caption Audio caption, 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the audio caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<number>} duration Duration of the audio in seconds
 * @param {Array<string>} performer Performer
 * @param {Array<string>} title Track name
 * @param {Array<InputFile> | Array<string>} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendAudio(
    chat_id: Array<number> | Array<string>, 
    audio: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    duration?: Array<number>, 
    performer?: Array<string>, 
    title?: Array<string>, 
    thumbnail?: Array<InputFile> | Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendAudio', {
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
    })
}

/**
 * Function: sendDocument
 * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * 
 * Read more: https://core.telegram.org/bots/api#senddocument
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} document File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<InputFile> | Array<string>} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<string>} caption Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the document caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<boolean>} disable_content_type_detection Disables automatic server-side content type detection for files uploaded using multipart/form-data
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendDocument(
    chat_id: Array<number> | Array<string>, 
    document: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    thumbnail?: Array<InputFile> | Array<string>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    disable_content_type_detection?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendDocument', {
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
    })
}

/**
 * Function: sendVideo
 * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * 
 * Read more: https://core.telegram.org/bots/api#sendvideo
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} video Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<number>} duration Duration of sent video in seconds
 * @param {Array<number>} width Video width
 * @param {Array<number>} height Video height
 * @param {Array<InputFile> | Array<string>} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<string>} caption Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the video caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<boolean>} has_spoiler Pass True if the video needs to be covered with a spoiler animation
 * @param {Array<boolean>} supports_streaming Pass True if the uploaded video is suitable for streaming
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendVideo(
    chat_id: Array<number> | Array<string>, 
    video: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    duration?: Array<number>, 
    width?: Array<number>, 
    height?: Array<number>, 
    thumbnail?: Array<InputFile> | Array<string>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    has_spoiler?: Array<boolean>, 
    supports_streaming?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendVideo', {
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
    })
}

/**
 * Function: sendAnimation
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
 * 
 * Read more: https://core.telegram.org/bots/api#sendanimation
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} animation Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<number>} duration Duration of sent animation in seconds
 * @param {Array<number>} width Animation width
 * @param {Array<number>} height Animation height
 * @param {Array<InputFile> | Array<string>} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<string>} caption Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the animation caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<boolean>} has_spoiler Pass True if the animation needs to be covered with a spoiler animation
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendAnimation(
    chat_id: Array<number> | Array<string>, 
    animation: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    duration?: Array<number>, 
    width?: Array<number>, 
    height?: Array<number>, 
    thumbnail?: Array<InputFile> | Array<string>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    has_spoiler?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendAnimation', {
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
    })
}

/**
 * Function: sendVoice
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
 * 
 * Read more: https://core.telegram.org/bots/api#sendvoice
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} voice Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} caption Voice message caption, 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<number>} duration Duration of the voice message in seconds
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendVoice(
    chat_id: Array<number> | Array<string>, 
    voice: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    duration?: Array<number>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendVoice', {
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
    })
}

/**
 * Function: sendVideoNote
 * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendvideonote
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} video_note Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL is currently unsupported
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<number>} duration Duration of sent video in seconds
 * @param {Array<number>} length Video width and height, i.e. diameter of the video message
 * @param {Array<InputFile> | Array<string>} thumbnail Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendVideoNote(
    chat_id: Array<number> | Array<string>, 
    video_note: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    duration?: Array<number>, 
    length?: Array<number>, 
    thumbnail?: Array<InputFile> | Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendVideoNote', {
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
    })
}

/**
 * Function: sendMediaGroup
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendmediagroup
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<Array<InputMediaAudio>> | Array<Array<InputMediaDocument>> | Array<Array<InputMediaPhoto>> | Array<Array<InputMediaVideo>>} media A JSON-serialized array describing messages to be sent, must include 2-10 items
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<boolean>} disable_notification Sends messages silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent messages from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the messages are a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @returns {Promise<Array<Array<Message>>>}
 */
async function sendMediaGroup(
    chat_id: Array<number> | Array<string>, 
    media: Array<Array<InputMediaAudio>> | Array<Array<InputMediaDocument>> | Array<Array<InputMediaPhoto>> | Array<Array<InputMediaVideo>>, 
    message_thread_id?: Array<number>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>
): Promise<Array<Array<Message>>> {
    return await get('sendMediaGroup', {
        chat_id, 
        media, 
        message_thread_id, 
        disable_notification, 
        protect_content, 
        reply_to_message_id, 
        allow_sending_without_reply
    })
}

/**
 * Function: sendLocation
 * Use this method to send point on the map. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendlocation
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} latitude Latitude of the location
 * @param {Array<number>} longitude Longitude of the location
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<number>} horizontal_accuracy The radius of uncertainty for the location, measured in meters; 0-1500
 * @param {Array<number>} live_period Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400.
 * @param {Array<number>} heading For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @param {Array<number>} proximity_alert_radius For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendLocation(
    chat_id: Array<number> | Array<string>, 
    latitude: Array<number>, 
    longitude: Array<number>, 
    message_thread_id?: Array<number>, 
    horizontal_accuracy?: Array<number>, 
    live_period?: Array<number>, 
    heading?: Array<number>, 
    proximity_alert_radius?: Array<number>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendLocation', {
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
    })
}

/**
 * Function: sendVenue
 * Use this method to send information about a venue. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendvenue
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} latitude Latitude of the venue
 * @param {Array<number>} longitude Longitude of the venue
 * @param {Array<string>} title Name of the venue
 * @param {Array<string>} address Address of the venue
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} foursquare_id Foursquare identifier of the venue
 * @param {Array<string>} foursquare_type Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
 * @param {Array<string>} google_place_id Google Places identifier of the venue
 * @param {Array<string>} google_place_type Google Places type of the venue. (See supported types.)
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendVenue(
    chat_id: Array<number> | Array<string>, 
    latitude: Array<number>, 
    longitude: Array<number>, 
    title: Array<string>, 
    address: Array<string>, 
    message_thread_id?: Array<number>, 
    foursquare_id?: Array<string>, 
    foursquare_type?: Array<string>, 
    google_place_id?: Array<string>, 
    google_place_type?: Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendVenue', {
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
    })
}

/**
 * Function: sendContact
 * Use this method to send phone contacts. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendcontact
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} phone_number Contact's phone number
 * @param {Array<string>} first_name Contact's first name
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} last_name Contact's last name
 * @param {Array<string>} vcard Additional data about the contact in the form of a vCard, 0-2048 bytes
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendContact(
    chat_id: Array<number> | Array<string>, 
    phone_number: Array<string>, 
    first_name: Array<string>, 
    message_thread_id?: Array<number>, 
    last_name?: Array<string>, 
    vcard?: Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendContact', {
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
    })
}

/**
 * Function: sendPoll
 * Use this method to send a native poll. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendpoll
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} question Poll question, 1-300 characters
 * @param {Array<Array<string>>} options A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<boolean>} is_anonymous True, if the poll needs to be anonymous, defaults to True
 * @param {Array<string>} type Poll type, "quiz" or "regular", defaults to "regular"
 * @param {Array<boolean>} allows_multiple_answers True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
 * @param {Array<number>} correct_option_id 0-based identifier of the correct answer option, required for polls in quiz mode
 * @param {Array<string>} explanation Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
 * @param {Array<string>} explanation_parse_mode Mode for parsing entities in the explanation. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} explanation_entities A JSON-serialized list of special entities that appear in the poll explanation, which can be specified instead of parse_mode
 * @param {Array<number>} open_period Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
 * @param {Array<number>} close_date Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
 * @param {Array<boolean>} is_closed Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendPoll(
    chat_id: Array<number> | Array<string>, 
    question: Array<string>, 
    options: Array<Array<string>>, 
    message_thread_id?: Array<number>, 
    is_anonymous?: Array<boolean>, 
    type?: Array<string>, 
    allows_multiple_answers?: Array<boolean>, 
    correct_option_id?: Array<number>, 
    explanation?: Array<string>, 
    explanation_parse_mode?: Array<string>, 
    explanation_entities?: Array<Array<MessageEntity>>, 
    open_period?: Array<number>, 
    close_date?: Array<number>, 
    is_closed?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendPoll', {
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
    })
}

/**
 * Function: sendDice
 * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#senddice
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} emoji Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲"
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendDice(
    chat_id: Array<number> | Array<string>, 
    message_thread_id?: Array<number>, 
    emoji?: Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendDice', {
        chat_id, 
        message_thread_id, 
        emoji, 
        disable_notification, 
        protect_content, 
        reply_to_message_id, 
        allow_sending_without_reply, 
        reply_markup
    })
}

/**
 * Function: sendChatAction
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
 * We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
 * 
 * Read more: https://core.telegram.org/bots/api#sendchataction
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} action Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread; supergroups only
 * @returns {Promise<Array<boolean>>}
 */
async function sendChatAction(
    chat_id: Array<number> | Array<string>, 
    action: Array<string>, 
    message_thread_id?: Array<number>
): Promise<Array<boolean>> {
    return await get('sendChatAction', {
        chat_id, 
        action, 
        message_thread_id
    })
}

/**
 * Function: getUserProfilePhotos
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 * 
 * Read more: https://core.telegram.org/bots/api#getuserprofilephotos
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<number>} offset Sequential number of the first photo to be returned. By default, all photos are returned.
 * @param {Array<number>} limit Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 * @returns {Promise<Array<UserProfilePhotos>>}
 */
async function getUserProfilePhotos(
    user_id: Array<number>, 
    offset?: Array<number>, 
    limit?: Array<number>
): Promise<Array<UserProfilePhotos>> {
    return await get('getUserProfilePhotos', {
        user_id, 
        offset, 
        limit
    })
}

/**
 * Function: getFile
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
 * Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
 * 
 * Read more: https://core.telegram.org/bots/api#getfile
 * @param {Array<string>} file_id File identifier to get information about
 * @returns {Promise<Array<File>>}
 */
async function getFile(
    file_id: Array<string>
): Promise<Array<File>> {
    return await get('getFile', {
        file_id
    })
}

/**
 * Function: banChatMember
 * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#banchatmember
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<number>} until_date Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
 * @param {Array<boolean>} revoke_messages Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
 * @returns {Promise<Array<boolean>>}
 */
async function banChatMember(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>, 
    until_date?: Array<number>, 
    revoke_messages?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('banChatMember', {
        chat_id, 
        user_id, 
        until_date, 
        revoke_messages
    })
}

/**
 * Function: unbanChatMember
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unbanchatmember
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<boolean>} only_if_banned Do nothing if the user is not banned
 * @returns {Promise<Array<boolean>>}
 */
async function unbanChatMember(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>, 
    only_if_banned?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('unbanChatMember', {
        chat_id, 
        user_id, 
        only_if_banned
    })
}

/**
 * Function: restrictChatMember
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#restrictchatmember
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<ChatPermissions>} permissions A JSON-serialized object for new user permissions
 * @param {Array<boolean>} use_independent_chat_permissions Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
 * @param {Array<number>} until_date Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
 * @returns {Promise<Array<boolean>>}
 */
async function restrictChatMember(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>, 
    permissions: Array<ChatPermissions>, 
    use_independent_chat_permissions?: Array<boolean>, 
    until_date?: Array<number>
): Promise<Array<boolean>> {
    return await get('restrictChatMember', {
        chat_id, 
        user_id, 
        permissions, 
        use_independent_chat_permissions, 
        until_date
    })
}

/**
 * Function: promoteChatMember
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#promotechatmember
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<boolean>} is_anonymous Pass True if the administrator's presence in the chat is hidden
 * @param {Array<boolean>} can_manage_chat Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
 * @param {Array<boolean>} can_post_messages Pass True if the administrator can create channel posts, channels only
 * @param {Array<boolean>} can_edit_messages Pass True if the administrator can edit messages of other users and can pin messages, channels only
 * @param {Array<boolean>} can_delete_messages Pass True if the administrator can delete messages of other users
 * @param {Array<boolean>} can_manage_video_chats Pass True if the administrator can manage video chats
 * @param {Array<boolean>} can_restrict_members Pass True if the administrator can restrict, ban or unban chat members
 * @param {Array<boolean>} can_promote_members Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
 * @param {Array<boolean>} can_change_info Pass True if the administrator can change chat title, photo and other settings
 * @param {Array<boolean>} can_invite_users Pass True if the administrator can invite new users to the chat
 * @param {Array<boolean>} can_pin_messages Pass True if the administrator can pin messages, supergroups only
 * @param {Array<boolean>} can_manage_topics Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only
 * @returns {Promise<Array<boolean>>}
 */
async function promoteChatMember(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>, 
    is_anonymous?: Array<boolean>, 
    can_manage_chat?: Array<boolean>, 
    can_post_messages?: Array<boolean>, 
    can_edit_messages?: Array<boolean>, 
    can_delete_messages?: Array<boolean>, 
    can_manage_video_chats?: Array<boolean>, 
    can_restrict_members?: Array<boolean>, 
    can_promote_members?: Array<boolean>, 
    can_change_info?: Array<boolean>, 
    can_invite_users?: Array<boolean>, 
    can_pin_messages?: Array<boolean>, 
    can_manage_topics?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('promoteChatMember', {
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
    })
}

/**
 * Function: setChatAdministratorCustomTitle
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatadministratorcustomtitle
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @param {Array<string>} custom_title New custom title for the administrator; 0-16 characters, emoji are not allowed
 * @returns {Promise<Array<boolean>>}
 */
async function setChatAdministratorCustomTitle(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>, 
    custom_title: Array<string>
): Promise<Array<boolean>> {
    return await get('setChatAdministratorCustomTitle', {
        chat_id, 
        user_id, 
        custom_title
    })
}

/**
 * Function: banChatSenderChat
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#banchatsenderchat
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} sender_chat_id Unique identifier of the target sender chat
 * @returns {Promise<Array<boolean>>}
 */
async function banChatSenderChat(
    chat_id: Array<number> | Array<string>, 
    sender_chat_id: Array<number>
): Promise<Array<boolean>> {
    return await get('banChatSenderChat', {
        chat_id, 
        sender_chat_id
    })
}

/**
 * Function: unbanChatSenderChat
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unbanchatsenderchat
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} sender_chat_id Unique identifier of the target sender chat
 * @returns {Promise<Array<boolean>>}
 */
async function unbanChatSenderChat(
    chat_id: Array<number> | Array<string>, 
    sender_chat_id: Array<number>
): Promise<Array<boolean>> {
    return await get('unbanChatSenderChat', {
        chat_id, 
        sender_chat_id
    })
}

/**
 * Function: setChatPermissions
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatpermissions
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<ChatPermissions>} permissions A JSON-serialized object for new default chat permissions
 * @param {Array<boolean>} use_independent_chat_permissions Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
 * @returns {Promise<Array<boolean>>}
 */
async function setChatPermissions(
    chat_id: Array<number> | Array<string>, 
    permissions: Array<ChatPermissions>, 
    use_independent_chat_permissions?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('setChatPermissions', {
        chat_id, 
        permissions, 
        use_independent_chat_permissions
    })
}

/**
 * Function: exportChatInviteLink
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
 * 
 * Read more: https://core.telegram.org/bots/api#exportchatinvitelink
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @returns {Promise<Array<string>>}
 */
async function exportChatInviteLink(
    chat_id: Array<number> | Array<string>
): Promise<Array<string>> {
    return await get('exportChatInviteLink', {
        chat_id
    })
}

/**
 * Function: createChatInviteLink
 * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
 * 
 * Read more: https://core.telegram.org/bots/api#createchatinvitelink
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} name Invite link name; 0-32 characters
 * @param {Array<number>} expire_date Point in time (Unix timestamp) when the link will expire
 * @param {Array<number>} member_limit The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 * @param {Array<boolean>} creates_join_request True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
 * @returns {Promise<Array<ChatInviteLink>>}
 */
async function createChatInviteLink(
    chat_id: Array<number> | Array<string>, 
    name?: Array<string>, 
    expire_date?: Array<number>, 
    member_limit?: Array<number>, 
    creates_join_request?: Array<boolean>
): Promise<Array<ChatInviteLink>> {
    return await get('createChatInviteLink', {
        chat_id, 
        name, 
        expire_date, 
        member_limit, 
        creates_join_request
    })
}

/**
 * Function: editChatInviteLink
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
 * 
 * Read more: https://core.telegram.org/bots/api#editchatinvitelink
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} invite_link The invite link to edit
 * @param {Array<string>} name Invite link name; 0-32 characters
 * @param {Array<number>} expire_date Point in time (Unix timestamp) when the link will expire
 * @param {Array<number>} member_limit The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 * @param {Array<boolean>} creates_join_request True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
 * @returns {Promise<Array<ChatInviteLink>>}
 */
async function editChatInviteLink(
    chat_id: Array<number> | Array<string>, 
    invite_link: Array<string>, 
    name?: Array<string>, 
    expire_date?: Array<number>, 
    member_limit?: Array<number>, 
    creates_join_request?: Array<boolean>
): Promise<Array<ChatInviteLink>> {
    return await get('editChatInviteLink', {
        chat_id, 
        invite_link, 
        name, 
        expire_date, 
        member_limit, 
        creates_join_request
    })
}

/**
 * Function: revokeChatInviteLink
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * 
 * Read more: https://core.telegram.org/bots/api#revokechatinvitelink
 * @param {Array<number> | Array<string>} chat_id Unique identifier of the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} invite_link The invite link to revoke
 * @returns {Promise<Array<ChatInviteLink>>}
 */
async function revokeChatInviteLink(
    chat_id: Array<number> | Array<string>, 
    invite_link: Array<string>
): Promise<Array<ChatInviteLink>> {
    return await get('revokeChatInviteLink', {
        chat_id, 
        invite_link
    })
}

/**
 * Function: approveChatJoinRequest
 * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#approvechatjoinrequest
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @returns {Promise<Array<boolean>>}
 */
async function approveChatJoinRequest(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>
): Promise<Array<boolean>> {
    return await get('approveChatJoinRequest', {
        chat_id, 
        user_id
    })
}

/**
 * Function: declineChatJoinRequest
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#declinechatjoinrequest
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @returns {Promise<Array<boolean>>}
 */
async function declineChatJoinRequest(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>
): Promise<Array<boolean>> {
    return await get('declineChatJoinRequest', {
        chat_id, 
        user_id
    })
}

/**
 * Function: setChatPhoto
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatphoto
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile>} photo New chat photo, uploaded using multipart/form-data
 * @returns {Promise<Array<boolean>>}
 */
async function setChatPhoto(
    chat_id: Array<number> | Array<string>, 
    photo: Array<InputFile>
): Promise<Array<boolean>> {
    return await get('setChatPhoto', {
        chat_id, 
        photo
    })
}

/**
 * Function: deleteChatPhoto
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletechatphoto
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @returns {Promise<Array<boolean>>}
 */
async function deleteChatPhoto(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('deleteChatPhoto', {
        chat_id
    })
}

/**
 * Function: setChatTitle
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchattitle
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} title New chat title, 1-128 characters
 * @returns {Promise<Array<boolean>>}
 */
async function setChatTitle(
    chat_id: Array<number> | Array<string>, 
    title: Array<string>
): Promise<Array<boolean>> {
    return await get('setChatTitle', {
        chat_id, 
        title
    })
}

/**
 * Function: setChatDescription
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatdescription
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} description New chat description, 0-255 characters
 * @returns {Promise<Array<boolean>>}
 */
async function setChatDescription(
    chat_id: Array<number> | Array<string>, 
    description?: Array<string>
): Promise<Array<boolean>> {
    return await get('setChatDescription', {
        chat_id, 
        description
    })
}

/**
 * Function: pinChatMessage
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#pinchatmessage
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Identifier of a message to pin
 * @param {Array<boolean>} disable_notification Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
 * @returns {Promise<Array<boolean>>}
 */
async function pinChatMessage(
    chat_id: Array<number> | Array<string>, 
    message_id: Array<number>, 
    disable_notification?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('pinChatMessage', {
        chat_id, 
        message_id, 
        disable_notification
    })
}

/**
 * Function: unpinChatMessage
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unpinchatmessage
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
 * @returns {Promise<Array<boolean>>}
 */
async function unpinChatMessage(
    chat_id: Array<number> | Array<string>, 
    message_id?: Array<number>
): Promise<Array<boolean>> {
    return await get('unpinChatMessage', {
        chat_id, 
        message_id
    })
}

/**
 * Function: unpinAllChatMessages
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unpinallchatmessages
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @returns {Promise<Array<boolean>>}
 */
async function unpinAllChatMessages(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('unpinAllChatMessages', {
        chat_id
    })
}

/**
 * Function: leaveChat
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#leavechat
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @returns {Promise<Array<boolean>>}
 */
async function leaveChat(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('leaveChat', {
        chat_id
    })
}

/**
 * Function: getChat
 * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getchat
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @returns {Promise<Array<Chat>>}
 */
async function getChat(
    chat_id: Array<number> | Array<string>
): Promise<Array<Chat>> {
    return await get('getChat', {
        chat_id
    })
}

/**
 * Function: getChatAdministrators
 * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
 * 
 * Read more: https://core.telegram.org/bots/api#getchatadministrators
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @returns {Promise<Array<Array<ChatMember>>>}
 */
async function getChatAdministrators(
    chat_id: Array<number> | Array<string>
): Promise<Array<Array<ChatMember>>> {
    return await get('getChatAdministrators', {
        chat_id
    })
}

/**
 * Function: getChatMemberCount
 * Use this method to get the number of members in a chat. Returns Int on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getchatmembercount
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @returns {Promise<Array<number>>}
 */
async function getChatMemberCount(
    chat_id: Array<number> | Array<string>
): Promise<Array<number>> {
    return await get('getChatMemberCount', {
        chat_id
    })
}

/**
 * Function: getChatMember
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getchatmember
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @param {Array<number>} user_id Unique identifier of the target user
 * @returns {Promise<Array<ChatMember>>}
 */
async function getChatMember(
    chat_id: Array<number> | Array<string>, 
    user_id: Array<number>
): Promise<Array<ChatMember>> {
    return await get('getChatMember', {
        chat_id, 
        user_id
    })
}

/**
 * Function: setChatStickerSet
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatstickerset
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<string>} sticker_set_name Name of the sticker set to be set as the group sticker set
 * @returns {Promise<Array<boolean>>}
 */
async function setChatStickerSet(
    chat_id: Array<number> | Array<string>, 
    sticker_set_name: Array<string>
): Promise<Array<boolean>> {
    return await get('setChatStickerSet', {
        chat_id, 
        sticker_set_name
    })
}

/**
 * Function: deleteChatStickerSet
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletechatstickerset
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @returns {Promise<Array<boolean>>}
 */
async function deleteChatStickerSet(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('deleteChatStickerSet', {
        chat_id
    })
}

/**
 * Function: getForumTopicIconStickers
 * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
 * 
 * Read more: https://core.telegram.org/bots/api#getforumtopiciconstickers * @returns {Promise<Array<Array<Sticker>>>}
 */
async function getForumTopicIconStickers(): Promise<Array<Array<Sticker>>> {
    return await get('getForumTopicIconStickers')
}

/**
 * Function: createForumTopic
 * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
 * 
 * Read more: https://core.telegram.org/bots/api#createforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<string>} name Topic name, 1-128 characters
 * @param {Array<number>} icon_color Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
 * @param {Array<string>} icon_custom_emoji_id Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
 * @returns {Promise<Array<ForumTopic>>}
 */
async function createForumTopic(
    chat_id: Array<number> | Array<string>, 
    name: Array<string>, 
    icon_color?: Array<number>, 
    icon_custom_emoji_id?: Array<string>
): Promise<Array<ForumTopic>> {
    return await get('createForumTopic', {
        chat_id, 
        name, 
        icon_color, 
        icon_custom_emoji_id
    })
}

/**
 * Function: editForumTopic
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#editforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread of the forum topic
 * @param {Array<string>} name New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
 * @param {Array<string>} icon_custom_emoji_id New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
 * @returns {Promise<Array<boolean>>}
 */
async function editForumTopic(
    chat_id: Array<number> | Array<string>, 
    message_thread_id: Array<number>, 
    name?: Array<string>, 
    icon_custom_emoji_id?: Array<string>
): Promise<Array<boolean>> {
    return await get('editForumTopic', {
        chat_id, 
        message_thread_id, 
        name, 
        icon_custom_emoji_id
    })
}

/**
 * Function: closeForumTopic
 * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#closeforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread of the forum topic
 * @returns {Promise<Array<boolean>>}
 */
async function closeForumTopic(
    chat_id: Array<number> | Array<string>, 
    message_thread_id: Array<number>
): Promise<Array<boolean>> {
    return await get('closeForumTopic', {
        chat_id, 
        message_thread_id
    })
}

/**
 * Function: reopenForumTopic
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#reopenforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread of the forum topic
 * @returns {Promise<Array<boolean>>}
 */
async function reopenForumTopic(
    chat_id: Array<number> | Array<string>, 
    message_thread_id: Array<number>
): Promise<Array<boolean>> {
    return await get('reopenForumTopic', {
        chat_id, 
        message_thread_id
    })
}

/**
 * Function: deleteForumTopic
 * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deleteforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread of the forum topic
 * @returns {Promise<Array<boolean>>}
 */
async function deleteForumTopic(
    chat_id: Array<number> | Array<string>, 
    message_thread_id: Array<number>
): Promise<Array<boolean>> {
    return await get('deleteForumTopic', {
        chat_id, 
        message_thread_id
    })
}

/**
 * Function: unpinAllForumTopicMessages
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unpinallforumtopicmessages
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread of the forum topic
 * @returns {Promise<Array<boolean>>}
 */
async function unpinAllForumTopicMessages(
    chat_id: Array<number> | Array<string>, 
    message_thread_id: Array<number>
): Promise<Array<boolean>> {
    return await get('unpinAllForumTopicMessages', {
        chat_id, 
        message_thread_id
    })
}

/**
 * Function: editGeneralForumTopic
 * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#editgeneralforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @param {Array<string>} name New topic name, 1-128 characters
 * @returns {Promise<Array<boolean>>}
 */
async function editGeneralForumTopic(
    chat_id: Array<number> | Array<string>, 
    name: Array<string>
): Promise<Array<boolean>> {
    return await get('editGeneralForumTopic', {
        chat_id, 
        name
    })
}

/**
 * Function: closeGeneralForumTopic
 * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#closegeneralforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @returns {Promise<Array<boolean>>}
 */
async function closeGeneralForumTopic(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('closeGeneralForumTopic', {
        chat_id
    })
}

/**
 * Function: reopenGeneralForumTopic
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#reopengeneralforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @returns {Promise<Array<boolean>>}
 */
async function reopenGeneralForumTopic(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('reopenGeneralForumTopic', {
        chat_id
    })
}

/**
 * Function: hideGeneralForumTopic
 * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#hidegeneralforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @returns {Promise<Array<boolean>>}
 */
async function hideGeneralForumTopic(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('hideGeneralForumTopic', {
        chat_id
    })
}

/**
 * Function: unhideGeneralForumTopic
 * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#unhidegeneralforumtopic
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @returns {Promise<Array<boolean>>}
 */
async function unhideGeneralForumTopic(
    chat_id: Array<number> | Array<string>
): Promise<Array<boolean>> {
    return await get('unhideGeneralForumTopic', {
        chat_id
    })
}

/**
 * Function: answerCallbackQuery
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#answercallbackquery
 * @param {Array<string>} callback_query_id Unique identifier for the query to be answered
 * @param {Array<string>} text Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
 * @param {Array<boolean>} show_alert If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
 * @param {Array<string>} url URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
 * @param {Array<number>} cache_time The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
 * @returns {Promise<Array<boolean>>}
 */
async function answerCallbackQuery(
    callback_query_id: Array<string>, 
    text?: Array<string>, 
    show_alert?: Array<boolean>, 
    url?: Array<string>, 
    cache_time?: Array<number>
): Promise<Array<boolean>> {
    return await get('answerCallbackQuery', {
        callback_query_id, 
        text, 
        show_alert, 
        url, 
        cache_time
    })
}

/**
 * Function: setMyCommands
 * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setmycommands
 * @param {Array<Array<BotCommand>>} commands A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
 * @param {Array<BotCommandScope>} scope A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 * @returns {Promise<Array<boolean>>}
 */
async function setMyCommands(
    commands: Array<Array<BotCommand>>, 
    scope?: Array<BotCommandScope>, 
    language_code?: Array<string>
): Promise<Array<boolean>> {
    return await get('setMyCommands', {
        commands, 
        scope, 
        language_code
    })
}

/**
 * Function: deleteMyCommands
 * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletemycommands
 * @param {Array<BotCommandScope>} scope A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 * @returns {Promise<Array<boolean>>}
 */
async function deleteMyCommands(
    scope?: Array<BotCommandScope>, 
    language_code?: Array<string>
): Promise<Array<boolean>> {
    return await get('deleteMyCommands', {
        scope, 
        language_code
    })
}

/**
 * Function: getMyCommands
 * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#getmycommands
 * @param {Array<BotCommandScope>} scope A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code or an empty string
 * @returns {Promise<Array<Array<BotCommand>>>}
 */
async function getMyCommands(
    scope?: Array<BotCommandScope>, 
    language_code?: Array<string>
): Promise<Array<Array<BotCommand>>> {
    return await get('getMyCommands', {
        scope, 
        language_code
    })
}

/**
 * Function: setMyName
 * Use this method to change the bot's name. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setmyname
 * @param {Array<string>} name New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
 * @returns {Promise<Array<boolean>>}
 */
async function setMyName(
    name?: Array<string>, 
    language_code?: Array<string>
): Promise<Array<boolean>> {
    return await get('setMyName', {
        name, 
        language_code
    })
}

/**
 * Function: getMyName
 * Use this method to get the current bot name for the given user language. Returns BotName on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getmyname
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code or an empty string
 * @returns {Promise<Array<BotName>>}
 */
async function getMyName(
    language_code?: Array<string>
): Promise<Array<BotName>> {
    return await get('getMyName', {
        language_code
    })
}

/**
 * Function: setMyDescription
 * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setmydescription
 * @param {Array<string>} description New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
 * @returns {Promise<Array<boolean>>}
 */
async function setMyDescription(
    description?: Array<string>, 
    language_code?: Array<string>
): Promise<Array<boolean>> {
    return await get('setMyDescription', {
        description, 
        language_code
    })
}

/**
 * Function: getMyDescription
 * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getmydescription
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code or an empty string
 * @returns {Promise<Array<BotDescription>>}
 */
async function getMyDescription(
    language_code?: Array<string>
): Promise<Array<BotDescription>> {
    return await get('getMyDescription', {
        language_code
    })
}

/**
 * Function: setMyShortDescription
 * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setmyshortdescription
 * @param {Array<string>} short_description New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
 * @returns {Promise<Array<boolean>>}
 */
async function setMyShortDescription(
    short_description?: Array<string>, 
    language_code?: Array<string>
): Promise<Array<boolean>> {
    return await get('setMyShortDescription', {
        short_description, 
        language_code
    })
}

/**
 * Function: getMyShortDescription
 * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getmyshortdescription
 * @param {Array<string>} language_code A two-letter ISO 639-1 language code or an empty string
 * @returns {Promise<Array<BotShortDescription>>}
 */
async function getMyShortDescription(
    language_code?: Array<string>
): Promise<Array<BotShortDescription>> {
    return await get('getMyShortDescription', {
        language_code
    })
}

/**
 * Function: setChatMenuButton
 * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setchatmenubutton
 * @param {Array<number>} chat_id Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
 * @param {Array<MenuButton>} menu_button A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
 * @returns {Promise<Array<boolean>>}
 */
async function setChatMenuButton(
    chat_id?: Array<number>, 
    menu_button?: Array<MenuButton>
): Promise<Array<boolean>> {
    return await get('setChatMenuButton', {
        chat_id, 
        menu_button
    })
}

/**
 * Function: getChatMenuButton
 * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getchatmenubutton
 * @param {Array<number>} chat_id Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
 * @returns {Promise<Array<MenuButton>>}
 */
async function getChatMenuButton(
    chat_id?: Array<number>
): Promise<Array<MenuButton>> {
    return await get('getChatMenuButton', {
        chat_id
    })
}

/**
 * Function: setMyDefaultAdministratorRights
 * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setmydefaultadministratorrights
 * @param {Array<ChatAdministratorRights>} rights A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
 * @param {Array<boolean>} for_channels Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
 * @returns {Promise<Array<boolean>>}
 */
async function setMyDefaultAdministratorRights(
    rights?: Array<ChatAdministratorRights>, 
    for_channels?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('setMyDefaultAdministratorRights', {
        rights, 
        for_channels
    })
}

/**
 * Function: getMyDefaultAdministratorRights
 * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
 * 
 * Read more: https://core.telegram.org/bots/api#getmydefaultadministratorrights
 * @param {Array<boolean>} for_channels Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
 * @returns {Promise<Array<ChatAdministratorRights>>}
 */
async function getMyDefaultAdministratorRights(
    for_channels?: Array<boolean>
): Promise<Array<ChatAdministratorRights>> {
    return await get('getMyDefaultAdministratorRights', {
        for_channels
    })
}

/**
 * Function: editMessageText
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#editmessagetext
 * @param {Array<string>} text New text of the message, 1-4096 characters after entities parsing
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message to edit
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<string>} parse_mode Mode for parsing entities in the message text. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} entities A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
 * @param {Array<boolean>} disable_web_page_preview Disables link previews for links in this message
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for an inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function editMessageText(
    text: Array<string>, 
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    parse_mode?: Array<string>, 
    entities?: Array<Array<MessageEntity>>, 
    disable_web_page_preview?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('editMessageText', {
        text, 
        chat_id, 
        message_id, 
        inline_message_id, 
        parse_mode, 
        entities, 
        disable_web_page_preview, 
        reply_markup
    })
}

/**
 * Function: editMessageCaption
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#editmessagecaption
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message to edit
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<string>} caption New caption of the message, 0-1024 characters after entities parsing
 * @param {Array<string>} parse_mode Mode for parsing entities in the message caption. See formatting options for more details.
 * @param {Array<Array<MessageEntity>>} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for an inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function editMessageCaption(
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    caption?: Array<string>, 
    parse_mode?: Array<string>, 
    caption_entities?: Array<Array<MessageEntity>>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('editMessageCaption', {
        chat_id, 
        message_id, 
        inline_message_id, 
        caption, 
        parse_mode, 
        caption_entities, 
        reply_markup
    })
}

/**
 * Function: editMessageMedia
 * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#editmessagemedia
 * @param {Array<InputMedia>} media A JSON-serialized object for a new media content of the message
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message to edit
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for a new inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function editMessageMedia(
    media: Array<InputMedia>, 
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('editMessageMedia', {
        media, 
        chat_id, 
        message_id, 
        inline_message_id, 
        reply_markup
    })
}

/**
 * Function: editMessageLiveLocation
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#editmessagelivelocation
 * @param {Array<number>} latitude Latitude of new location
 * @param {Array<number>} longitude Longitude of new location
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message to edit
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<number>} horizontal_accuracy The radius of uncertainty for the location, measured in meters; 0-1500
 * @param {Array<number>} heading Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @param {Array<number>} proximity_alert_radius The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for a new inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function editMessageLiveLocation(
    latitude: Array<number>, 
    longitude: Array<number>, 
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    horizontal_accuracy?: Array<number>, 
    heading?: Array<number>, 
    proximity_alert_radius?: Array<number>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('editMessageLiveLocation', {
        latitude, 
        longitude, 
        chat_id, 
        message_id, 
        inline_message_id, 
        horizontal_accuracy, 
        heading, 
        proximity_alert_radius, 
        reply_markup
    })
}

/**
 * Function: stopMessageLiveLocation
 * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#stopmessagelivelocation
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message with live location to stop
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for a new inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function stopMessageLiveLocation(
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('stopMessageLiveLocation', {
        chat_id, 
        message_id, 
        inline_message_id, 
        reply_markup
    })
}

/**
 * Function: editMessageReplyMarkup
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#editmessagereplymarkup
 * @param {Array<number> | Array<string>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the message to edit
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for an inline keyboard.
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function editMessageReplyMarkup(
    chat_id?: Array<number> | Array<string>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message> | Array<boolean>> {
    return await get('editMessageReplyMarkup', {
        chat_id, 
        message_id, 
        inline_message_id, 
        reply_markup
    })
}

/**
 * Function: stopPoll
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#stoppoll
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Identifier of the original message with the poll
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for a new message inline keyboard.
 * @returns {Promise<Array<Poll>>}
 */
async function stopPoll(
    chat_id: Array<number> | Array<string>, 
    message_id: Array<number>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Poll>> {
    return await get('stopPoll', {
        chat_id, 
        message_id, 
        reply_markup
    })
}

/**
 * Function: deleteMessage
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
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<number>} message_id Identifier of the message to delete
 * @returns {Promise<Array<boolean>>}
 */
async function deleteMessage(
    chat_id: Array<number> | Array<string>, 
    message_id: Array<number>
): Promise<Array<boolean>> {
    return await get('deleteMessage', {
        chat_id, 
        message_id
    })
}

/**
 * Function: sendSticker
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendsticker
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<InputFile> | Array<string>} sticker Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Video stickers can only be sent by a file_id. Animated stickers can't be sent via an HTTP URL.
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<string>} emoji Emoji associated with the sticker; only for just uploaded stickers
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns {Promise<Array<Message>>}
 */
async function sendSticker(
    chat_id: Array<number> | Array<string>, 
    sticker: Array<InputFile> | Array<string>, 
    message_thread_id?: Array<number>, 
    emoji?: Array<string>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup> | Array<ReplyKeyboardMarkup> | Array<ReplyKeyboardRemove> | Array<ForceReply>
): Promise<Array<Message>> {
    return await get('sendSticker', {
        chat_id, 
        sticker, 
        message_thread_id, 
        emoji, 
        disable_notification, 
        protect_content, 
        reply_to_message_id, 
        allow_sending_without_reply, 
        reply_markup
    })
}

/**
 * Function: getStickerSet
 * Use this method to get a sticker set. On success, a StickerSet object is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#getstickerset
 * @param {Array<string>} name Name of the sticker set
 * @returns {Promise<Array<StickerSet>>}
 */
async function getStickerSet(
    name: Array<string>
): Promise<Array<StickerSet>> {
    return await get('getStickerSet', {
        name
    })
}

/**
 * Function: getCustomEmojiStickers
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 * 
 * Read more: https://core.telegram.org/bots/api#getcustomemojistickers
 * @param {Array<Array<string>>} custom_emoji_ids List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
 * @returns {Promise<Array<Array<Sticker>>>}
 */
async function getCustomEmojiStickers(
    custom_emoji_ids: Array<Array<string>>
): Promise<Array<Array<Sticker>>> {
    return await get('getCustomEmojiStickers', {
        custom_emoji_ids
    })
}

/**
 * Function: uploadStickerFile
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
 * 
 * Read more: https://core.telegram.org/bots/api#uploadstickerfile
 * @param {Array<number>} user_id User identifier of sticker file owner
 * @param {Array<InputFile>} sticker A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
 * @param {Array<string>} sticker_format Format of the sticker, must be one of "static", "animated", "video"
 * @returns {Promise<Array<File>>}
 */
async function uploadStickerFile(
    user_id: Array<number>, 
    sticker: Array<InputFile>, 
    sticker_format: Array<string>
): Promise<Array<File>> {
    return await get('uploadStickerFile', {
        user_id, 
        sticker, 
        sticker_format
    })
}

/**
 * Function: createNewStickerSet
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#createnewstickerset
 * @param {Array<number>} user_id User identifier of created sticker set owner
 * @param {Array<string>} name Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
 * @param {Array<string>} title Sticker set title, 1-64 characters
 * @param {Array<Array<InputSticker>>} stickers A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
 * @param {Array<string>} sticker_format Format of stickers in the set, must be one of "static", "animated", "video"
 * @param {Array<string>} sticker_type Type of stickers in the set, pass "regular", "mask", or "custom_emoji". By default, a regular sticker set is created.
 * @param {Array<boolean>} needs_repainting Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
 * @returns {Promise<Array<boolean>>}
 */
async function createNewStickerSet(
    user_id: Array<number>, 
    name: Array<string>, 
    title: Array<string>, 
    stickers: Array<Array<InputSticker>>, 
    sticker_format: Array<string>, 
    sticker_type?: Array<string>, 
    needs_repainting?: Array<boolean>
): Promise<Array<boolean>> {
    return await get('createNewStickerSet', {
        user_id, 
        name, 
        title, 
        stickers, 
        sticker_format, 
        sticker_type, 
        needs_repainting
    })
}

/**
 * Function: addStickerToSet
 * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#addstickertoset
 * @param {Array<number>} user_id User identifier of sticker set owner
 * @param {Array<string>} name Sticker set name
 * @param {Array<InputSticker>} sticker A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
 * @returns {Promise<Array<boolean>>}
 */
async function addStickerToSet(
    user_id: Array<number>, 
    name: Array<string>, 
    sticker: Array<InputSticker>
): Promise<Array<boolean>> {
    return await get('addStickerToSet', {
        user_id, 
        name, 
        sticker
    })
}

/**
 * Function: setStickerPositionInSet
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickerpositioninset
 * @param {Array<string>} sticker File identifier of the sticker
 * @param {Array<number>} position New sticker position in the set, zero-based
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerPositionInSet(
    sticker: Array<string>, 
    position: Array<number>
): Promise<Array<boolean>> {
    return await get('setStickerPositionInSet', {
        sticker, 
        position
    })
}

/**
 * Function: deleteStickerFromSet
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletestickerfromset
 * @param {Array<string>} sticker File identifier of the sticker
 * @returns {Promise<Array<boolean>>}
 */
async function deleteStickerFromSet(
    sticker: Array<string>
): Promise<Array<boolean>> {
    return await get('deleteStickerFromSet', {
        sticker
    })
}

/**
 * Function: setStickerEmojiList
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickeremojilist
 * @param {Array<string>} sticker File identifier of the sticker
 * @param {Array<Array<string>>} emoji_list A JSON-serialized list of 1-20 emoji associated with the sticker
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerEmojiList(
    sticker: Array<string>, 
    emoji_list: Array<Array<string>>
): Promise<Array<boolean>> {
    return await get('setStickerEmojiList', {
        sticker, 
        emoji_list
    })
}

/**
 * Function: setStickerKeywords
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickerkeywords
 * @param {Array<string>} sticker File identifier of the sticker
 * @param {Array<Array<string>>} keywords A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerKeywords(
    sticker: Array<string>, 
    keywords?: Array<Array<string>>
): Promise<Array<boolean>> {
    return await get('setStickerKeywords', {
        sticker, 
        keywords
    })
}

/**
 * Function: setStickerMaskPosition
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickermaskposition
 * @param {Array<string>} sticker File identifier of the sticker
 * @param {Array<MaskPosition>} mask_position A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerMaskPosition(
    sticker: Array<string>, 
    mask_position?: Array<MaskPosition>
): Promise<Array<boolean>> {
    return await get('setStickerMaskPosition', {
        sticker, 
        mask_position
    })
}

/**
 * Function: setStickerSetTitle
 * Use this method to set the title of a created sticker set. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickersettitle
 * @param {Array<string>} name Sticker set name
 * @param {Array<string>} title Sticker set title, 1-64 characters
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerSetTitle(
    name: Array<string>, 
    title: Array<string>
): Promise<Array<boolean>> {
    return await get('setStickerSetTitle', {
        name, 
        title
    })
}

/**
 * Function: setStickerSetThumbnail
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setstickersetthumbnail
 * @param {Array<string>} name Sticker set name
 * @param {Array<number>} user_id User identifier of the sticker set owner
 * @param {Array<InputFile> | Array<string>} thumbnail A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
 * @returns {Promise<Array<boolean>>}
 */
async function setStickerSetThumbnail(
    name: Array<string>, 
    user_id: Array<number>, 
    thumbnail?: Array<InputFile> | Array<string>
): Promise<Array<boolean>> {
    return await get('setStickerSetThumbnail', {
        name, 
        user_id, 
        thumbnail
    })
}

/**
 * Function: setCustomEmojiStickerSetThumbnail
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
 * @param {Array<string>} name Sticker set name
 * @param {Array<string>} custom_emoji_id Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
 * @returns {Promise<Array<boolean>>}
 */
async function setCustomEmojiStickerSetThumbnail(
    name: Array<string>, 
    custom_emoji_id?: Array<string>
): Promise<Array<boolean>> {
    return await get('setCustomEmojiStickerSetThumbnail', {
        name, 
        custom_emoji_id
    })
}

/**
 * Function: deleteStickerSet
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 * 
 * Read more: https://core.telegram.org/bots/api#deletestickerset
 * @param {Array<string>} name Sticker set name
 * @returns {Promise<Array<boolean>>}
 */
async function deleteStickerSet(
    name: Array<string>
): Promise<Array<boolean>> {
    return await get('deleteStickerSet', {
        name
    })
}

/**
 * Function: answerInlineQuery
 * Use this method to send answers to an inline query. On success, True is returned.
 * No more than 50 results per query are allowed.
 * 
 * Read more: https://core.telegram.org/bots/api#answerinlinequery
 * @param {Array<string>} inline_query_id Unique identifier for the answered query
 * @param {Array<Array<InlineQueryResult>>} results A JSON-serialized array of results for the inline query
 * @param {Array<number>} cache_time The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
 * @param {Array<boolean>} is_personal Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
 * @param {Array<string>} next_offset Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
 * @param {Array<InlineQueryResultsButton>} button A JSON-serialized object describing a button to be shown above inline query results
 * @returns {Promise<Array<boolean>>}
 */
async function answerInlineQuery(
    inline_query_id: Array<string>, 
    results: Array<Array<InlineQueryResult>>, 
    cache_time?: Array<number>, 
    is_personal?: Array<boolean>, 
    next_offset?: Array<string>, 
    button?: Array<InlineQueryResultsButton>
): Promise<Array<boolean>> {
    return await get('answerInlineQuery', {
        inline_query_id, 
        results, 
        cache_time, 
        is_personal, 
        next_offset, 
        button
    })
}

/**
 * Function: answerWebAppQuery
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#answerwebappquery
 * @param {Array<string>} web_app_query_id Unique identifier for the query to be answered
 * @param {Array<InlineQueryResult>} result A JSON-serialized object describing the message to be sent
 * @returns {Promise<Array<SentWebAppMessage>>}
 */
async function answerWebAppQuery(
    web_app_query_id: Array<string>, 
    result: Array<InlineQueryResult>
): Promise<Array<SentWebAppMessage>> {
    return await get('answerWebAppQuery', {
        web_app_query_id, 
        result
    })
}

/**
 * Function: sendInvoice
 * Use this method to send invoices. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendinvoice
 * @param {Array<number> | Array<string>} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {Array<string>} title Product name, 1-32 characters
 * @param {Array<string>} description Product description, 1-255 characters
 * @param {Array<string>} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
 * @param {Array<string>} provider_token Payment provider token, obtained via @BotFather
 * @param {Array<string>} currency Three-letter ISO 4217 currency code, see more on currencies
 * @param {Array<Array<LabeledPrice>>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<number>} max_tip_amount The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
 * @param {Array<Array<number>>} suggested_tip_amounts A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @param {Array<string>} start_parameter Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
 * @param {Array<string>} provider_data JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
 * @param {Array<string>} photo_url URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
 * @param {Array<number>} photo_size Photo size in bytes
 * @param {Array<number>} photo_width Photo width
 * @param {Array<number>} photo_height Photo height
 * @param {Array<boolean>} need_name Pass True if you require the user's full name to complete the order
 * @param {Array<boolean>} need_phone_number Pass True if you require the user's phone number to complete the order
 * @param {Array<boolean>} need_email Pass True if you require the user's email address to complete the order
 * @param {Array<boolean>} need_shipping_address Pass True if you require the user's shipping address to complete the order
 * @param {Array<boolean>} send_phone_number_to_provider Pass True if the user's phone number should be sent to provider
 * @param {Array<boolean>} send_email_to_provider Pass True if the user's email address should be sent to provider
 * @param {Array<boolean>} is_flexible Pass True if the final price depends on the shipping method
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
 * @returns {Promise<Array<Message>>}
 */
async function sendInvoice(
    chat_id: Array<number> | Array<string>, 
    title: Array<string>, 
    description: Array<string>, 
    payload: Array<string>, 
    provider_token: Array<string>, 
    currency: Array<string>, 
    prices: Array<Array<LabeledPrice>>, 
    message_thread_id?: Array<number>, 
    max_tip_amount?: Array<number>, 
    suggested_tip_amounts?: Array<Array<number>>, 
    start_parameter?: Array<string>, 
    provider_data?: Array<string>, 
    photo_url?: Array<string>, 
    photo_size?: Array<number>, 
    photo_width?: Array<number>, 
    photo_height?: Array<number>, 
    need_name?: Array<boolean>, 
    need_phone_number?: Array<boolean>, 
    need_email?: Array<boolean>, 
    need_shipping_address?: Array<boolean>, 
    send_phone_number_to_provider?: Array<boolean>, 
    send_email_to_provider?: Array<boolean>, 
    is_flexible?: Array<boolean>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message>> {
    return await get('sendInvoice', {
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
    })
}

/**
 * Function: createInvoiceLink
 * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 * 
 * Read more: https://core.telegram.org/bots/api#createinvoicelink
 * @param {Array<string>} title Product name, 1-32 characters
 * @param {Array<string>} description Product description, 1-255 characters
 * @param {Array<string>} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
 * @param {Array<string>} provider_token Payment provider token, obtained via BotFather
 * @param {Array<string>} currency Three-letter ISO 4217 currency code, see more on currencies
 * @param {Array<Array<LabeledPrice>>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
 * @param {Array<number>} max_tip_amount The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
 * @param {Array<Array<number>>} suggested_tip_amounts A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @param {Array<string>} provider_data JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
 * @param {Array<string>} photo_url URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
 * @param {Array<number>} photo_size Photo size in bytes
 * @param {Array<number>} photo_width Photo width
 * @param {Array<number>} photo_height Photo height
 * @param {Array<boolean>} need_name Pass True if you require the user's full name to complete the order
 * @param {Array<boolean>} need_phone_number Pass True if you require the user's phone number to complete the order
 * @param {Array<boolean>} need_email Pass True if you require the user's email address to complete the order
 * @param {Array<boolean>} need_shipping_address Pass True if you require the user's shipping address to complete the order
 * @param {Array<boolean>} send_phone_number_to_provider Pass True if the user's phone number should be sent to the provider
 * @param {Array<boolean>} send_email_to_provider Pass True if the user's email address should be sent to the provider
 * @param {Array<boolean>} is_flexible Pass True if the final price depends on the shipping method
 * @returns {Promise<Array<string>>}
 */
async function createInvoiceLink(
    title: Array<string>, 
    description: Array<string>, 
    payload: Array<string>, 
    provider_token: Array<string>, 
    currency: Array<string>, 
    prices: Array<Array<LabeledPrice>>, 
    max_tip_amount?: Array<number>, 
    suggested_tip_amounts?: Array<Array<number>>, 
    provider_data?: Array<string>, 
    photo_url?: Array<string>, 
    photo_size?: Array<number>, 
    photo_width?: Array<number>, 
    photo_height?: Array<number>, 
    need_name?: Array<boolean>, 
    need_phone_number?: Array<boolean>, 
    need_email?: Array<boolean>, 
    need_shipping_address?: Array<boolean>, 
    send_phone_number_to_provider?: Array<boolean>, 
    send_email_to_provider?: Array<boolean>, 
    is_flexible?: Array<boolean>
): Promise<Array<string>> {
    return await get('createInvoiceLink', {
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
    })
}

/**
 * Function: answerShippingQuery
 * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#answershippingquery
 * @param {Array<string>} shipping_query_id Unique identifier for the query to be answered
 * @param {Array<boolean>} ok Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
 * @param {Array<Array<ShippingOption>>} shipping_options Required if ok is True. A JSON-serialized array of available shipping options.
 * @param {Array<string>} error_message Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
 * @returns {Promise<Array<boolean>>}
 */
async function answerShippingQuery(
    shipping_query_id: Array<string>, 
    ok: Array<boolean>, 
    shipping_options?: Array<Array<ShippingOption>>, 
    error_message?: Array<string>
): Promise<Array<boolean>> {
    return await get('answerShippingQuery', {
        shipping_query_id, 
        ok, 
        shipping_options, 
        error_message
    })
}

/**
 * Function: answerPreCheckoutQuery
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * 
 * Read more: https://core.telegram.org/bots/api#answerprecheckoutquery
 * @param {Array<string>} pre_checkout_query_id Unique identifier for the query to be answered
 * @param {Array<boolean>} ok Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
 * @param {Array<string>} error_message Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
 * @returns {Promise<Array<boolean>>}
 */
async function answerPreCheckoutQuery(
    pre_checkout_query_id: Array<string>, 
    ok: Array<boolean>, 
    error_message?: Array<string>
): Promise<Array<boolean>> {
    return await get('answerPreCheckoutQuery', {
        pre_checkout_query_id, 
        ok, 
        error_message
    })
}

/**
 * Function: setPassportDataErrors
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
 * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
 * 
 * Read more: https://core.telegram.org/bots/api#setpassportdataerrors
 * @param {Array<number>} user_id User identifier
 * @param {Array<Array<PassportElementError>>} errors A JSON-serialized array describing the errors
 * @returns {Promise<Array<boolean>>}
 */
async function setPassportDataErrors(
    user_id: Array<number>, 
    errors: Array<Array<PassportElementError>>
): Promise<Array<boolean>> {
    return await get('setPassportDataErrors', {
        user_id, 
        errors
    })
}

/**
 * Function: sendGame
 * Use this method to send a game. On success, the sent Message is returned.
 * 
 * Read more: https://core.telegram.org/bots/api#sendgame
 * @param {Array<number>} chat_id Unique identifier for the target chat
 * @param {Array<string>} game_short_name Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
 * @param {Array<number>} message_thread_id Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @param {Array<boolean>} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {Array<boolean>} protect_content Protects the contents of the sent message from forwarding and saving
 * @param {Array<number>} reply_to_message_id If the message is a reply, ID of the original message
 * @param {Array<boolean>} allow_sending_without_reply Pass True if the message should be sent even if the specified replied-to message is not found
 * @param {Array<InlineKeyboardMarkup>} reply_markup A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
 * @returns {Promise<Array<Message>>}
 */
async function sendGame(
    chat_id: Array<number>, 
    game_short_name: Array<string>, 
    message_thread_id?: Array<number>, 
    disable_notification?: Array<boolean>, 
    protect_content?: Array<boolean>, 
    reply_to_message_id?: Array<number>, 
    allow_sending_without_reply?: Array<boolean>, 
    reply_markup?: Array<InlineKeyboardMarkup>
): Promise<Array<Message>> {
    return await get('sendGame', {
        chat_id, 
        game_short_name, 
        message_thread_id, 
        disable_notification, 
        protect_content, 
        reply_to_message_id, 
        allow_sending_without_reply, 
        reply_markup
    })
}

/**
 * Function: setGameScore
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
 * 
 * Read more: https://core.telegram.org/bots/api#setgamescore
 * @param {Array<number>} user_id User identifier
 * @param {Array<number>} score New score, must be non-negative
 * @param {Array<boolean>} force Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
 * @param {Array<boolean>} disable_edit_message Pass True if the game message should not be automatically edited to include the current scoreboard
 * @param {Array<number>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the sent message
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @returns {Promise<Array<Message> | Array<boolean>>}
 */
async function setGameScore(
    user_id: Array<number>, 
    score: Array<number>, 
    force?: Array<boolean>, 
    disable_edit_message?: Array<boolean>, 
    chat_id?: Array<number>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>
): Promise<Array<Message> | Array<boolean>> {
    return await get('setGameScore', {
        user_id, 
        score, 
        force, 
        disable_edit_message, 
        chat_id, 
        message_id, 
        inline_message_id
    })
}

/**
 * Function: getGameHighScores
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
 * 
 * Read more: https://core.telegram.org/bots/api#getgamehighscores
 * @param {Array<number>} user_id Target user id
 * @param {Array<number>} chat_id Required if inline_message_id is not specified. Unique identifier for the target chat
 * @param {Array<number>} message_id Required if inline_message_id is not specified. Identifier of the sent message
 * @param {Array<string>} inline_message_id Required if chat_id and message_id are not specified. Identifier of the inline message
 * @returns {Promise<Array<Array<GameHighScore>>>}
 */
async function getGameHighScores(
    user_id: Array<number>, 
    chat_id?: Array<number>, 
    message_id?: Array<number>, 
    inline_message_id?: Array<string>
): Promise<Array<Array<GameHighScore>>> {
    return await get('getGameHighScores', {
        user_id, 
        chat_id, 
        message_id, 
        inline_message_id
    })
}

export default { getUpdates, setWebhook, deleteWebhook, getWebhookInfo, getMe, logOut, close, sendMessage, forwardMessage, copyMessage, sendPhoto, sendAudio, sendDocument, sendVideo, sendAnimation, sendVoice, sendVideoNote, sendMediaGroup, sendLocation, sendVenue, sendContact, sendPoll, sendDice, sendChatAction, getUserProfilePhotos, getFile, banChatMember, unbanChatMember, restrictChatMember, promoteChatMember, setChatAdministratorCustomTitle, banChatSenderChat, unbanChatSenderChat, setChatPermissions, exportChatInviteLink, createChatInviteLink, editChatInviteLink, revokeChatInviteLink, approveChatJoinRequest, declineChatJoinRequest, setChatPhoto, deleteChatPhoto, setChatTitle, setChatDescription, pinChatMessage, unpinChatMessage, unpinAllChatMessages, leaveChat, getChat, getChatAdministrators, getChatMemberCount, getChatMember, setChatStickerSet, deleteChatStickerSet, getForumTopicIconStickers, createForumTopic, editForumTopic, closeForumTopic, reopenForumTopic, deleteForumTopic, unpinAllForumTopicMessages, editGeneralForumTopic, closeGeneralForumTopic, reopenGeneralForumTopic, hideGeneralForumTopic, unhideGeneralForumTopic, answerCallbackQuery, setMyCommands, deleteMyCommands, getMyCommands, setMyName, getMyName, setMyDescription, getMyDescription, setMyShortDescription, getMyShortDescription, setChatMenuButton, getChatMenuButton, setMyDefaultAdministratorRights, getMyDefaultAdministratorRights, editMessageText, editMessageCaption, editMessageMedia, editMessageLiveLocation, stopMessageLiveLocation, editMessageReplyMarkup, stopPoll, deleteMessage, sendSticker, getStickerSet, getCustomEmojiStickers, uploadStickerFile, createNewStickerSet, addStickerToSet, setStickerPositionInSet, deleteStickerFromSet, setStickerEmojiList, setStickerKeywords, setStickerMaskPosition, setStickerSetTitle, setStickerSetThumbnail, setCustomEmojiStickerSetThumbnail, deleteStickerSet, answerInlineQuery, answerWebAppQuery, sendInvoice, createInvoiceLink, answerShippingQuery, answerPreCheckoutQuery, setPassportDataErrors, sendGame, setGameScore, getGameHighScores }