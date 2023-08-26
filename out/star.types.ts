/* Telegram API wrapper for Javascript
  By MinecraftPublisher
  Auto-Scraped from https://core.telegram.org/bots/api
  */

interface API<T> {
    ok: boolean,
    error?: string,
    data?: T
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
    update_id: string | number
    /* Optional. New incoming message of any kind - text, photo, sticker, etc. */
    message?: Message
    /* Optional. New version of a message that is known to the bot and was edited */
    edited_message?: Message
    /* Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
    channel_post?: Message
    /* Optional. New version of a channel post that is known to the bot and was edited */
    edited_channel_post?: Message
    /* Optional. New incoming inline query */
    inline_query?: InlineQuery
    /* Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    chosen_inline_result?: ChosenInlineResult
    /* Optional. New incoming callback query */
    callback_query?: CallbackQuery
    /* Optional. New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: ShippingQuery
    /* Optional. New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: PreCheckoutQuery
    /* Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
    poll?: Poll
    /* Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    poll_answer?: PollAnswer
    /* Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    my_chat_member?: ChatMemberUpdated
    /* Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates. */
    chat_member?: ChatMemberUpdated
    /* Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
    chat_join_request?: ChatJoinRequest
}

/**
 * Interface: WebhookInfo
 * Describes the current status of a webhook.
 * 
 * Read more: https://core.telegram.org/bots/api#webhookinfo
 */
interface WebhookInfo {
    /* Webhook URL, may be empty if webhook is not set up */
    url: string
    /* True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: boolean
    /* Number of updates awaiting delivery */
    pending_update_count: string | number
    /* Optional. Currently used webhook IP address */
    ip_address?: string
    /* Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: string | number
    /* Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: string
    /* Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
    last_synchronization_error_date?: string | number
    /* Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connections?: string | number
    /* Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
    allowed_updates?: Array<string>
}

/**
 * Interface: User
 * This object represents a Telegram user or bot.
 * 
 * Read more: https://core.telegram.org/bots/api#user
 */
interface User {
    /* Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: string | number
    /* True, if this user is a bot */
    is_bot: boolean
    /* User's or bot's first name */
    first_name: string
    /* Optional. User's or bot's last name */
    last_name?: string
    /* Optional. User's or bot's username */
    username?: string
    /* Optional. IETF language tag of the user's language */
    language_code?: string
    /* Optional. True, if this user is a Telegram Premium user */
    is_premium?: boolean
    /* Optional. True, if this user added the bot to the attachment menu */
    added_to_attachment_menu?: boolean
    /* Optional. True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups?: boolean
    /* Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages?: boolean
    /* Optional. True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries?: boolean
}

/**
 * Interface: Chat
 * This object represents a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chat
 */
interface Chat {
    /* Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: string | number
    /* Type of chat, can be either "private", "group", "supergroup" or "channel" */
    type: string
    /* Optional. Title, for supergroups, channels and group chats */
    title?: string
    /* Optional. Username, for private chats, supergroups and channels if available */
    username?: string
    /* Optional. First name of the other party in a private chat */
    first_name?: string
    /* Optional. Last name of the other party in a private chat */
    last_name?: string
    /* Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: boolean
    /* Optional. Chat photo. Returned only in getChat. */
    photo?: ChatPhoto
    /* Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat. */
    active_usernames?: Array<string>
    /* Optional. Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat. */
    emoji_status_custom_emoji_id?: string
    /* Optional. Bio of the other party in a private chat. Returned only in getChat. */
    bio?: string
    /* Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat. */
    has_private_forwards?: boolean
    /* Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat. */
    has_restricted_voice_and_video_messages?: boolean
    /* Optional. True, if users need to join the supergroup before they can send messages. Returned only in getChat. */
    join_to_send_messages?: boolean
    /* Optional. True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat. */
    join_by_request?: boolean
    /* Optional. Description, for groups, supergroups and channel chats. Returned only in getChat. */
    description?: string
    /* Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
    invite_link?: string
    /* Optional. The most recent pinned message (by sending date). Returned only in getChat. */
    pinned_message?: Message
    /* Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat. */
    permissions?: ChatPermissions
    /* Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in seconds. Returned only in getChat. */
    slow_mode_delay?: string | number
    /* Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
    message_auto_delete_time?: string | number
    /* Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat. */
    has_aggressive_anti_spam_enabled?: boolean
    /* Optional. True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat. */
    has_hidden_members?: boolean
    /* Optional. True, if messages from the chat can't be forwarded to other chats. Returned only in getChat. */
    has_protected_content?: boolean
    /* Optional. For supergroups, name of group sticker set. Returned only in getChat. */
    sticker_set_name?: string
    /* Optional. True, if the bot can change the group sticker set. Returned only in getChat. */
    can_set_sticker_set?: boolean
    /* Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
    linked_chat_id?: string | number
    /* Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
    location?: ChatLocation
}

/**
 * Interface: Message
 * This object represents a message.
 * 
 * Read more: https://core.telegram.org/bots/api#message
 */
interface Message {
    /* Unique message identifier inside this chat */
    message_id: string | number
    /* Date the message was sent in Unix time */
    date: string | number
    /* Conversation the message belongs to */
    chat: Chat
    /* Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
    message_thread_id?: string | number
    /* Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    from?: User
    /* Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
    sender_chat?: Chat
    /* Optional. For forwarded messages, sender of the original message */
    forward_from?: User
    /* Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
    forward_from_chat?: Chat
    /* Optional. For messages forwarded from channels, identifier of the original message in the channel */
    forward_from_message_id?: string | number
    /* Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
    forward_signature?: string
    /* Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_sender_name?: string
    /* Optional. For forwarded messages, date the original message was sent in Unix time */
    forward_date?: string | number
    /* Optional. True, if the message is sent to a forum topic */
    is_topic_message?: boolean
    /* Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    is_automatic_forward?: boolean
    /* Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message?: Message
    /* Optional. Bot through which the message was sent */
    via_bot?: User
    /* Optional. Date the message was last edited in Unix time */
    edit_date?: string | number
    /* Optional. True, if the message can't be forwarded */
    has_protected_content?: boolean
    /* Optional. The unique identifier of a media message group this message belongs to */
    media_group_id?: string
    /* Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature?: string
    /* Optional. For text messages, the actual UTF-8 text of the message */
    text?: string
    /* Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: Array<MessageEntity>
    /* Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation?: Animation
    /* Optional. Message is an audio file, information about the file */
    audio?: Audio
    /* Optional. Message is a general file, information about the file */
    document?: Document
    /* Optional. Message is a photo, available sizes of the photo */
    photo?: Array<PhotoSize>
    /* Optional. Message is a sticker, information about the sticker */
    sticker?: Sticker
    /* Optional. Message is a video, information about the video */
    video?: Video
    /* Optional. Message is a video note, information about the video message */
    video_note?: VideoNote
    /* Optional. Message is a voice message, information about the file */
    voice?: Voice
    /* Optional. Caption for the animation, audio, document, photo, video or voice */
    caption?: string
    /* Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: Array<MessageEntity>
    /* Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: boolean
    /* Optional. Message is a shared contact, information about the contact */
    contact?: Contact
    /* Optional. Message is a dice with random value */
    dice?: Dice
    /* Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games */
    game?: Game
    /* Optional. Message is a native poll, information about the poll */
    poll?: Poll
    /* Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue?: Venue
    /* Optional. Message is a shared location, information about the location */
    location?: Location
    /* Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: Array<User>
    /* Optional. A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: User
    /* Optional. A chat title was changed to this value */
    new_chat_title?: string
    /* Optional. A chat photo was change to this value */
    new_chat_photo?: Array<PhotoSize>
    /* Optional. Service message: the chat photo was deleted */
    delete_chat_photo?: boolean
    /* Optional. Service message: the group has been created */
    group_chat_created?: boolean
    /* Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: boolean
    /* Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: boolean
    /* Optional. Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged
    /* Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: string | number
    /* Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: string | number
    /* Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
    pinned_message?: Message
    /* Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments */
    invoice?: Invoice
    /* Optional. Message is a service message about a successful payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments */
    successful_payment?: SuccessfulPayment
    /* Optional. Service message: a user was shared with the bot */
    user_shared?: UserShared
    /* Optional. Service message: a chat was shared with the bot */
    chat_shared?: ChatShared
    /* Optional. The domain name of the website on which the user has logged in. More about Telegram Login: https://core.telegram.org/widgets/login */
    connected_website?: string
    /* Optional. Service message: the user allowed the bot added to the attachment menu to write messages */
    write_access_allowed?: WriteAccessAllowed
    /* Optional. Telegram Passport data */
    passport_data?: PassportData
    /* Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered?: ProximityAlertTriggered
    /* Optional. Service message: forum topic created */
    forum_topic_created?: ForumTopicCreated
    /* Optional. Service message: forum topic edited */
    forum_topic_edited?: ForumTopicEdited
    /* Optional. Service message: forum topic closed */
    forum_topic_closed?: ForumTopicClosed
    /* Optional. Service message: forum topic reopened */
    forum_topic_reopened?: ForumTopicReopened
    /* Optional. Service message: the 'General' forum topic hidden */
    general_forum_topic_hidden?: GeneralForumTopicHidden
    /* Optional. Service message: the 'General' forum topic unhidden */
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden
    /* Optional. Service message: video chat scheduled */
    video_chat_scheduled?: VideoChatScheduled
    /* Optional. Service message: video chat started */
    video_chat_started?: VideoChatStarted
    /* Optional. Service message: video chat ended */
    video_chat_ended?: VideoChatEnded
    /* Optional. Service message: new participants invited to a video chat */
    video_chat_participants_invited?: VideoChatParticipantsInvited
    /* Optional. Service message: data sent by a Web App */
    web_app_data?: WebAppData
    /* Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup?: InlineKeyboardMarkup
}

/**
 * Interface: MessageId
 * This object represents a unique message identifier.
 * 
 * Read more: https://core.telegram.org/bots/api#messageid
 */
interface MessageId {
    /* Unique message identifier */
    message_id: string | number
}

/**
 * Interface: MessageEntity
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * 
 * Read more: https://core.telegram.org/bots/api#messageentity
 */
interface MessageEntity {
    /* Type of the entity. Currently, can be "mention" (@username), "hashtag" (#hashtag), "cashtag" ($USD), "bot_command" (/start@jobs_bot), "url" (https://telegram.org), "email" (do-not-reply@telegram.org), "phone_number" (+1-212-555-0123), "bold" (bold text), "italic" (italic text), "underline" (underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler message), "code" (monowidth string), "pre" (monowidth block), "text_link" (for clickable text URLs), "text_mention" (for users without usernames), "custom_emoji" (for inline custom emoji stickers) */
    type: string
    /* Offset in UTF-16 code units to the start of the entity */
    offset: string | number
    /* Length of the entity in UTF-16 code units */
    length: string | number
    /* Optional. For "text_link" only, URL that will be opened after user taps on the text */
    url?: string
    /* Optional. For "text_mention" only, the mentioned user */
    user?: User
    /* Optional. For "pre" only, the programming language of the entity text */
    language?: string
    /* Optional. For "custom_emoji" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
    custom_emoji_id?: string
}

/**
 * Interface: PhotoSize
 * This object represents one size of a photo or a file / sticker thumbnail.
 * 
 * Read more: https://core.telegram.org/bots/api#photosize
 */
interface PhotoSize {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Photo width */
    width: string | number
    /* Photo height */
    height: string | number
    /* Optional. File size in bytes */
    file_size?: string | number
}

/**
 * Interface: Animation
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 * 
 * Read more: https://core.telegram.org/bots/api#animation
 */
interface Animation {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Video width as defined by sender */
    width: string | number
    /* Video height as defined by sender */
    height: string | number
    /* Duration of the video in seconds as defined by sender */
    duration: string | number
    /* Optional. Animation thumbnail as defined by sender */
    thumbnail?: PhotoSize
    /* Optional. Original animation filename as defined by sender */
    file_name?: string
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
}

/**
 * Interface: Audio
 * This object represents an audio file to be treated as music by the Telegram clients.
 * 
 * Read more: https://core.telegram.org/bots/api#audio
 */
interface Audio {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Duration of the audio in seconds as defined by sender */
    duration: string | number
    /* Optional. Performer of the audio as defined by sender or by audio tags */
    performer?: string
    /* Optional. Title of the audio as defined by sender or by audio tags */
    title?: string
    /* Optional. Original filename as defined by sender */
    file_name?: string
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
    /* Optional. Thumbnail of the album cover to which the music file belongs */
    thumbnail?: PhotoSize
}

/**
 * Interface: Document
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 * 
 * Read more: https://core.telegram.org/bots/api#document
 */
interface Document {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Optional. Document thumbnail as defined by sender */
    thumbnail?: PhotoSize
    /* Optional. Original filename as defined by sender */
    file_name?: string
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
}

/**
 * Interface: Video
 * This object represents a video file.
 * 
 * Read more: https://core.telegram.org/bots/api#video
 */
interface Video {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Video width as defined by sender */
    width: string | number
    /* Video height as defined by sender */
    height: string | number
    /* Duration of the video in seconds as defined by sender */
    duration: string | number
    /* Optional. Video thumbnail */
    thumbnail?: PhotoSize
    /* Optional. Original filename as defined by sender */
    file_name?: string
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
}

/**
 * Interface: VideoNote
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * 
 * Read more: https://core.telegram.org/bots/api#videonote
 */
interface VideoNote {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Video width and height (diameter of the video message) as defined by sender */
    length: string | number
    /* Duration of the video in seconds as defined by sender */
    duration: string | number
    /* Optional. Video thumbnail */
    thumbnail?: PhotoSize
    /* Optional. File size in bytes */
    file_size?: string | number
}

/**
 * Interface: Voice
 * This object represents a voice note.
 * 
 * Read more: https://core.telegram.org/bots/api#voice
 */
interface Voice {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Duration of the audio in seconds as defined by sender */
    duration: string | number
    /* Optional. MIME type of the file as defined by sender */
    mime_type?: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
}

/**
 * Interface: Contact
 * This object represents a phone contact.
 * 
 * Read more: https://core.telegram.org/bots/api#contact
 */
interface Contact {
    /* Contact's phone number */
    phone_number: string
    /* Contact's first name */
    first_name: string
    /* Optional. Contact's last name */
    last_name?: string
    /* Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id?: string | number
    /* Optional. Additional data about the contact in the form of a vCard */
    vcard?: string
}

/**
 * Interface: Dice
 * This object represents an animated emoji that displays a random value.
 * 
 * Read more: https://core.telegram.org/bots/api#dice
 */
interface Dice {
    /* Emoji on which the dice throw animation is based */
    emoji: string
    /* Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji */
    value: string | number
}

/**
 * Interface: PollOption
 * This object contains information about one answer option in a poll.
 * 
 * Read more: https://core.telegram.org/bots/api#polloption
 */
interface PollOption {
    /* Option text, 1-100 characters */
    text: string
    /* Number of users that voted for this option */
    voter_count: string | number
}

/**
 * Interface: PollAnswer
 * This object represents an answer of a user in a non-anonymous poll.
 * 
 * Read more: https://core.telegram.org/bots/api#pollanswer
 */
interface PollAnswer {
    /* Unique poll identifier */
    poll_id: string
    /* The user, who changed the answer to the poll */
    user: User
    /* 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
    option_ids: Array<string | number>
}

/**
 * Interface: Poll
 * This object contains information about a poll.
 * 
 * Read more: https://core.telegram.org/bots/api#poll
 */
interface Poll {
    /* Unique poll identifier */
    id: string
    /* Poll question, 1-300 characters */
    question: string
    /* List of poll options */
    options: Array<PollOption>
    /* Total number of users that voted in the poll */
    total_voter_count: string | number
    /* True, if the poll is closed */
    is_closed: boolean
    /* True, if the poll is anonymous */
    is_anonymous: boolean
    /* Poll type, currently can be "regular" or "quiz" */
    type: string
    /* True, if the poll allows multiple answers */
    allows_multiple_answers: boolean
    /* Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id?: string | number
    /* Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation?: string
    /* Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities?: Array<MessageEntity>
    /* Optional. Amount of time in seconds the poll will be active after creation */
    open_period?: string | number
    /* Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date?: string | number
}

/**
 * Interface: Location
 * This object represents a point on the map.
 * 
 * Read more: https://core.telegram.org/bots/api#location
 */
interface Location {
    /* Longitude as defined by sender */
    longitude: string | number
    /* Latitude as defined by sender */
    latitude: string | number
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: string | number
    /* Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    live_period?: string | number
    /* Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading?: string | number
    /* Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius?: string | number
}

/**
 * Interface: Venue
 * This object represents a venue.
 * 
 * Read more: https://core.telegram.org/bots/api#venue
 */
interface Venue {
    /* Venue location. Can't be a live location */
    location: Location
    /* Name of the venue */
    title: string
    /* Address of the venue */
    address: string
    /* Optional. Foursquare identifier of the venue */
    foursquare_id?: string
    /* Optional. Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: string
    /* Optional. Google Places identifier of the venue */
    google_place_id?: string
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string
}

/**
 * Interface: WebAppData
 * Describes data sent from a Web App to the bot.
 * 
 * Read more: https://core.telegram.org/bots/api#webappdata
 */
interface WebAppData {
    /* The data. Be aware that a bad client can send arbitrary data in this field. */
    data: string
    /* Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
    button_text: string
}

/**
 * Interface: ProximityAlertTriggered
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * 
 * Read more: https://core.telegram.org/bots/api#proximityalerttriggered
 */
interface ProximityAlertTriggered {
    /* User that triggered the alert */
    traveler: User
    /* User that set the alert */
    watcher: User
    /* The distance between the users */
    distance: string | number
}

/**
 * Interface: MessageAutoDeleteTimerChanged
 * This object represents a service message about a change in auto-delete timer settings.
 * 
 * Read more: https://core.telegram.org/bots/api#messageautodeletetimerchanged
 */
interface MessageAutoDeleteTimerChanged {
    /* New auto-delete time for messages in the chat; in seconds */
    message_auto_delete_time: string | number
}

/**
 * Interface: ForumTopicCreated
 * This object represents a service message about a new forum topic created in the chat.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopiccreated
 */
interface ForumTopicCreated {
    /* Name of the topic */
    name: string
    /* Color of the topic icon in RGB format */
    icon_color: string | number
    /* Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: string
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
    name?: string
    /* Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
    icon_custom_emoji_id?: string
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
    request_id: string | number
    /* Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
    user_id: string | number
}

/**
 * Interface: ChatShared
 * This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.
 * 
 * Read more: https://core.telegram.org/bots/api#chatshared
 */
interface ChatShared {
    /* Identifier of the request */
    request_id: string | number
    /* Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
    chat_id: string | number
}

/**
 * Interface: WriteAccessAllowed
 * This object represents a service message about a user allowing a bot to write messages after adding the bot to the attachment menu or launching a Web App from a link.
 * 
 * Read more: https://core.telegram.org/bots/api#writeaccessallowed
 */
interface WriteAccessAllowed {
    /* Optional. Name of the Web App which was launched from a link */
    web_app_name?: string
}

/**
 * Interface: VideoChatScheduled
 * This object represents a service message about a video chat scheduled in the chat.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatscheduled
 */
interface VideoChatScheduled {
    /* Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
    start_date: string | number
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
    duration: string | number
}

/**
 * Interface: VideoChatParticipantsInvited
 * This object represents a service message about new members invited to a video chat.
 * 
 * Read more: https://core.telegram.org/bots/api#videochatparticipantsinvited
 */
interface VideoChatParticipantsInvited {
    /* New members that were invited to the video chat */
    users: Array<User>
}

/**
 * Interface: UserProfilePhotos
 * This object represent a user's profile pictures.
 * 
 * Read more: https://core.telegram.org/bots/api#userprofilephotos
 */
interface UserProfilePhotos {
    /* Total number of profile pictures the target user has */
    total_count: string | number
    /* Requested profile pictures (in up to 4 sizes each) */
    photos: Array<Array<PhotoSize>>
}

/**
 * Interface: File
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 * 
 * Read more: https://core.telegram.org/bots/api#file
 */
interface File {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: string | number
    /* Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path?: string
}

/**
 * Interface: WebAppInfo
 * Describes a Web App.
 * 
 * Read more: https://core.telegram.org/bots/api#webappinfo
 */
interface WebAppInfo {
    /* An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
    url: string
}

/**
 * Interface: ReplyKeyboardMarkup
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
 * 
 * Read more: https://core.telegram.org/bots/api#replykeyboardmarkup
 */
interface ReplyKeyboardMarkup {
    /* Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: Array<Array<KeyboardButton>>
    /* Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
    is_persistent?: boolean
    /* Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: boolean
    /* Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard?: boolean
    /* Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder?: string
    /* Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
    selective?: boolean
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
    text: string
    /* Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a "user_shared" service message. Available in private chats only. */
    request_user?: KeyboardButtonRequestUser
    /* Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only. */
    request_chat?: KeyboardButtonRequestChat
    /* Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_contact?: boolean
    /* Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_location?: boolean
    /* Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    request_poll?: KeyboardButtonPollType
    /* Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only. */
    web_app?: WebAppInfo
}

/**
 * Interface: KeyboardButtonRequestUser
 * This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed. More about requesting users: https://core.telegram.org/bots/features#chat-and-user-selection
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonrequestuser
 */
interface KeyboardButtonRequestUser {
    /* Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message */
    request_id: string | number
    /* Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
    user_is_bot?: boolean
    /* Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
    user_is_premium?: boolean
}

/**
 * Interface: KeyboardButtonRequestChat
 * This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed. More about requesting chats: https://core.telegram.org/bots/features#chat-and-user-selection
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 */
interface KeyboardButtonRequestChat {
    /* Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
    request_id: string | number
    /* Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
    chat_is_channel: boolean
    /* Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
    chat_is_forum?: boolean
    /* Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
    chat_has_username?: boolean
    /* Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
    chat_is_created?: boolean
    /* Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
    user_administrator_rights?: ChatAdministratorRights
    /* Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_administrator_rights?: ChatAdministratorRights
    /* Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
    bot_is_member?: boolean
}

/**
 * Interface: KeyboardButtonPollType
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * 
 * Read more: https://core.telegram.org/bots/api#keyboardbuttonpolltype
 */
interface KeyboardButtonPollType {
    /* Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type?: string
}

/**
 * Interface: ReplyKeyboardRemove
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
 * 
 * Read more: https://core.telegram.org/bots/api#replykeyboardremove
 */
interface ReplyKeyboardRemove {
    /* Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: boolean
    /* Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
    selective?: boolean
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
    inline_keyboard: Array<Array<InlineKeyboardButton>>
}

/**
 * Interface: InlineKeyboardButton
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
interface InlineKeyboardButton {
    /* Label text on the button */
    text: string
    /* Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
    url?: string
    /* Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    callback_data?: string
    /* Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
    web_app?: WebAppInfo
    /* Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url?: LoginUrl
    /* Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm... actions - in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. */
    switch_inline_query?: string
    /* Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. */
    switch_inline_query_current_chat?: string
    /* Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field */
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat
    /* Optional. Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row. */
    callback_game?: CallbackGame
    /* Optional. Specify True, to send a Pay button. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
    pay?: boolean
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
    url: string
    /* Optional. New text of the button in forwarded messages. */
    forward_text?: string
    /* Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username?: string
    /* Optional. Pass True to request the permission for your bot to send messages to the user. */
    request_write_access?: boolean
}

/**
 * Interface: SwitchInlineQueryChosenChat
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#switchinlinequerychosenchat
 */
interface SwitchInlineQueryChosenChat {
    /* Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
    query?: string
    /* Optional. True, if private chats with users can be chosen */
    allow_user_chats?: boolean
    /* Optional. True, if private chats with bots can be chosen */
    allow_bot_chats?: boolean
    /* Optional. True, if group and supergroup chats can be chosen */
    allow_group_chats?: boolean
    /* Optional. True, if channel chats can be chosen */
    allow_channel_chats?: boolean
}

/**
 * Interface: CallbackQuery
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 * 
 * Read more: https://core.telegram.org/bots/api#callbackquery
 */
interface CallbackQuery {
    /* Unique identifier for this query */
    id: string
    /* Sender */
    from: User
    /* Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: string
    /* Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message?: Message
    /* Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: string
    /* Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    data?: string
    /* Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name?: string
}

/**
 * Interface: ForceReply
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 * 
 * Read more: https://core.telegram.org/bots/api#forcereply
 */
interface ForceReply {
    /* Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: boolean
    /* Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder?: string
    /* Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. */
    selective?: boolean
}

/**
 * Interface: ChatPhoto
 * This object represents a chat photo.
 * 
 * Read more: https://core.telegram.org/bots/api#chatphoto
 */
interface ChatPhoto {
    /* File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: string
    /* Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: string
    /* File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: string
    /* Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: string
}

/**
 * Interface: ChatInviteLink
 * Represents an invite link for a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatinvitelink
 */
interface ChatInviteLink {
    /* The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with "...". */
    invite_link: string
    /* Creator of the link */
    creator: User
    /* True, if users joining the chat via the link need to be approved by chat administrators */
    creates_join_request: boolean
    /* True, if the link is primary */
    is_primary: boolean
    /* True, if the link is revoked */
    is_revoked: boolean
    /* Optional. Invite link name */
    name?: string
    /* Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date?: string | number
    /* Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: string | number
    /* Optional. Number of pending join requests created using this link */
    pending_join_request_count?: string | number
}

/**
 * Interface: ChatAdministratorRights
 * Represents the rights of an administrator in a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatadministratorrights
 */
interface ChatAdministratorRights {
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: boolean
    /* True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: boolean
    /* True, if the administrator can delete messages of other users */
    can_delete_messages: boolean
    /* True, if the administrator can manage video chats */
    can_manage_video_chats: boolean
    /* True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: boolean
    /* True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean
    /* Optional. True, if the administrator can post in the channel; channels only */
    can_post_messages?: boolean
    /* Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages?: boolean
    /* Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages?: boolean
    /* Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
    can_manage_topics?: boolean
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
    status: string
    /* Information about the user */
    user: User
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: boolean
    /* Optional. Custom title for this user */
    custom_title?: string
}

/**
 * Interface: ChatMemberAdministrator
 * Represents a chat member that has some additional privileges.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberadministrator
 */
interface ChatMemberAdministrator {
    /* The member's status in the chat, always "administrator" */
    status: string
    /* Information about the user */
    user: User
    /* True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: boolean
    /* True, if the user's presence in the chat is hidden */
    is_anonymous: boolean
    /* True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
    can_manage_chat: boolean
    /* True, if the administrator can delete messages of other users */
    can_delete_messages: boolean
    /* True, if the administrator can manage video chats */
    can_manage_video_chats: boolean
    /* True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members: boolean
    /* True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean
    /* Optional. True, if the administrator can post in the channel; channels only */
    can_post_messages?: boolean
    /* Optional. True, if the administrator can edit messages of other users and can pin messages; channels only */
    can_edit_messages?: boolean
    /* Optional. True, if the user is allowed to pin messages; groups and supergroups only */
    can_pin_messages?: boolean
    /* Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
    can_manage_topics?: boolean
    /* Optional. Custom title for this user */
    custom_title?: string
}

/**
 * Interface: ChatMemberMember
 * Represents a chat member that has no additional privileges or restrictions.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmembermember
 */
interface ChatMemberMember {
    /* The member's status in the chat, always "member" */
    status: string
    /* Information about the user */
    user: User
}

/**
 * Interface: ChatMemberRestricted
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberrestricted
 */
interface ChatMemberRestricted {
    /* The member's status in the chat, always "restricted" */
    status: string
    /* Information about the user */
    user: User
    /* True, if the user is a member of the chat at the moment of the request */
    is_member: boolean
    /* True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_messages: boolean
    /* True, if the user is allowed to send audios */
    can_send_audios: boolean
    /* True, if the user is allowed to send documents */
    can_send_documents: boolean
    /* True, if the user is allowed to send photos */
    can_send_photos: boolean
    /* True, if the user is allowed to send videos */
    can_send_videos: boolean
    /* True, if the user is allowed to send video notes */
    can_send_video_notes: boolean
    /* True, if the user is allowed to send voice notes */
    can_send_voice_notes: boolean
    /* True, if the user is allowed to send polls */
    can_send_polls: boolean
    /* True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: boolean
    /* True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: boolean
    /* True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean
    /* True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean
    /* True, if the user is allowed to pin messages */
    can_pin_messages: boolean
    /* True, if the user is allowed to create forum topics */
    can_manage_topics: boolean
    /* Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever */
    until_date: string | number
}

/**
 * Interface: ChatMemberLeft
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberleft
 */
interface ChatMemberLeft {
    /* The member's status in the chat, always "left" */
    status: string
    /* Information about the user */
    user: User
}

/**
 * Interface: ChatMemberBanned
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberbanned
 */
interface ChatMemberBanned {
    /* The member's status in the chat, always "kicked" */
    status: string
    /* Information about the user */
    user: User
    /* Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever */
    until_date: string | number
}

/**
 * Interface: ChatMemberUpdated
 * This object represents changes in the status of a chat member.
 * 
 * Read more: https://core.telegram.org/bots/api#chatmemberupdated
 */
interface ChatMemberUpdated {
    /* Chat the user belongs to */
    chat: Chat
    /* Performer of the action, which resulted in the change */
    from: User
    /* Date the change was done in Unix time */
    date: string | number
    /* Previous information about the chat member */
    old_chat_member: ChatMember
    /* New information about the chat member */
    new_chat_member: ChatMember
    /* Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link?: ChatInviteLink
    /* Optional. True, if the user joined the chat via a chat folder invite link */
    via_chat_folder_invite_link?: boolean
}

/**
 * Interface: ChatJoinRequest
 * Represents a join request sent to a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatjoinrequest
 */
interface ChatJoinRequest {
    /* Chat to which the request was sent */
    chat: Chat
    /* User that sent the join request */
    from: User
    /* Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 24 hours to send messages until the join request is processed, assuming no other administrator contacted the user. */
    user_chat_id: string | number
    /* Date the request was sent in Unix time */
    date: string | number
    /* Optional. Bio of the user. */
    bio?: string
    /* Optional. Chat invite link that was used by the user to send the join request */
    invite_link?: ChatInviteLink
}

/**
 * Interface: ChatPermissions
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * 
 * Read more: https://core.telegram.org/bots/api#chatpermissions
 */
interface ChatPermissions {
    /* Optional. True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
    can_send_messages?: boolean
    /* Optional. True, if the user is allowed to send audios */
    can_send_audios?: boolean
    /* Optional. True, if the user is allowed to send documents */
    can_send_documents?: boolean
    /* Optional. True, if the user is allowed to send photos */
    can_send_photos?: boolean
    /* Optional. True, if the user is allowed to send videos */
    can_send_videos?: boolean
    /* Optional. True, if the user is allowed to send video notes */
    can_send_video_notes?: boolean
    /* Optional. True, if the user is allowed to send voice notes */
    can_send_voice_notes?: boolean
    /* Optional. True, if the user is allowed to send polls */
    can_send_polls?: boolean
    /* Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages?: boolean
    /* Optional. True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews?: boolean
    /* Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: boolean
    /* Optional. True, if the user is allowed to invite new users to the chat */
    can_invite_users?: boolean
    /* Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: boolean
    /* Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
    can_manage_topics?: boolean
}

/**
 * Interface: ChatLocation
 * Represents a location to which a chat is connected.
 * 
 * Read more: https://core.telegram.org/bots/api#chatlocation
 */
interface ChatLocation {
    /* The location to which the supergroup is connected. Can't be a live location. */
    location: Location
    /* Location address; 1-64 characters, as defined by the chat owner */
    address: string
}

/**
 * Interface: ForumTopic
 * This object represents a forum topic.
 * 
 * Read more: https://core.telegram.org/bots/api#forumtopic
 */
interface ForumTopic {
    /* Unique identifier of the forum topic */
    message_thread_id: string | number
    /* Name of the topic */
    name: string
    /* Color of the topic icon in RGB format */
    icon_color: string | number
    /* Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: string
}

/**
 * Interface: BotCommand
 * This object represents a bot command.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommand
 */
interface BotCommand {
    /* Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: string
    /* Description of the command; 1-256 characters. */
    description: string
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
    type: string
}

/**
 * Interface: BotCommandScopeAllPrivateChats
 * Represents the scope of bot commands, covering all private chats.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallprivatechats
 */
interface BotCommandScopeAllPrivateChats {
    /* Scope type, must be all_private_chats */
    type: string
}

/**
 * Interface: BotCommandScopeAllGroupChats
 * Represents the scope of bot commands, covering all group and supergroup chats.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallgroupchats
 */
interface BotCommandScopeAllGroupChats {
    /* Scope type, must be all_group_chats */
    type: string
}

/**
 * Interface: BotCommandScopeAllChatAdministrators
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopeallchatadministrators
 */
interface BotCommandScopeAllChatAdministrators {
    /* Scope type, must be all_chat_administrators */
    type: string
}

/**
 * Interface: BotCommandScopeChat
 * Represents the scope of bot commands, covering a specific chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechat
 */
interface BotCommandScopeChat {
    /* Scope type, must be chat */
    type: string
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: string | number | string
}

/**
 * Interface: BotCommandScopeChatAdministrators
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechatadministrators
 */
interface BotCommandScopeChatAdministrators {
    /* Scope type, must be chat_administrators */
    type: string
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: string | number | string
}

/**
 * Interface: BotCommandScopeChatMember
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * 
 * Read more: https://core.telegram.org/bots/api#botcommandscopechatmember
 */
interface BotCommandScopeChatMember {
    /* Scope type, must be chat_member */
    type: string
    /* Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: string | number | string
    /* Unique identifier of the target user */
    user_id: string | number
}

/**
 * Interface: BotName
 * This object represents the bot's name.
 * 
 * Read more: https://core.telegram.org/bots/api#botname
 */
interface BotName {
    /* The bot's name */
    name: string
}

/**
 * Interface: BotDescription
 * This object represents the bot's description.
 * 
 * Read more: https://core.telegram.org/bots/api#botdescription
 */
interface BotDescription {
    /* The bot's description */
    description: string
}

/**
 * Interface: BotShortDescription
 * This object represents the bot's short description.
 * 
 * Read more: https://core.telegram.org/bots/api#botshortdescription
 */
interface BotShortDescription {
    /* The bot's short description */
    short_description: string
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
    type: string
}

/**
 * Interface: MenuButtonWebApp
 * Represents a menu button, which launches a Web App.
 * 
 * Read more: https://core.telegram.org/bots/api#menubuttonwebapp
 */
interface MenuButtonWebApp {
    /* Type of the button, must be web_app */
    type: string
    /* Text on the button */
    text: string
    /* Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. */
    web_app: WebAppInfo
}

/**
 * Interface: MenuButtonDefault
 * Describes that no specific value for the menu button was set.
 * 
 * Read more: https://core.telegram.org/bots/api#menubuttondefault
 */
interface MenuButtonDefault {
    /* Type of the button, must be default */
    type: string
}

/**
 * Interface: ResponseParameters
 * Describes why a request was unsuccessful.
 * 
 * Read more: https://core.telegram.org/bots/api#responseparameters
 */
interface ResponseParameters {
    /* Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: string | number
    /* Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: string | number
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
    type: string
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: string
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: boolean
}

/**
 * Interface: InputMediaVideo
 * Represents a video to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediavideo
 */
interface InputMediaVideo {
    /* Type of the result, must be video */
    type: string
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: string
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: InputFile | string
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Video width */
    width?: string | number
    /* Optional. Video height */
    height?: string | number
    /* Optional. Video duration in seconds */
    duration?: string | number
    /* Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: boolean
    /* Optional. Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: boolean
}

/**
 * Interface: InputMediaAnimation
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediaanimation
 */
interface InputMediaAnimation {
    /* Type of the result, must be animation */
    type: string
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: string
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: InputFile | string
    /* Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Animation width */
    width?: string | number
    /* Optional. Animation height */
    height?: string | number
    /* Optional. Animation duration in seconds */
    duration?: string | number
    /* Optional. Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: boolean
}

/**
 * Interface: InputMediaAudio
 * Represents an audio file to be treated as music to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediaaudio
 */
interface InputMediaAudio {
    /* Type of the result, must be audio */
    type: string
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: string
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: InputFile | string
    /* Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Duration of the audio in seconds */
    duration?: string | number
    /* Optional. Performer of the audio */
    performer?: string
    /* Optional. Title of the audio */
    title?: string
}

/**
 * Interface: InputMediaDocument
 * Represents a general file to be sent.
 * 
 * Read more: https://core.telegram.org/bots/api#inputmediadocument
 */
interface InputMediaDocument {
    /* Type of the result, must be document */
    type: string
    /* File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    media: string
    /* Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    thumbnail?: InputFile | string
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
    disable_content_type_detection?: boolean
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
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* Type of the sticker, currently one of "regular", "mask", "custom_emoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    type: string
    /* Sticker width */
    width: string | number
    /* Sticker height */
    height: string | number
    /* True, if the sticker is animated */
    is_animated: boolean
    /* True, if the sticker is a video sticker */
    is_video: boolean
    /* Optional. Sticker thumbnail in the .WEBP or .JPG format */
    thumbnail?: PhotoSize
    /* Optional. Emoji associated with the sticker */
    emoji?: string
    /* Optional. Name of the sticker set to which the sticker belongs */
    set_name?: string
    /* Optional. For premium regular stickers, premium animation for the sticker */
    premium_animation?: File
    /* Optional. For mask stickers, the position where the mask should be placed */
    mask_position?: MaskPosition
    /* Optional. For custom emoji stickers, unique identifier of the custom emoji */
    custom_emoji_id?: string
    /* Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    needs_repainting?: boolean
    /* Optional. File size in bytes */
    file_size?: string | number
}

/**
 * Interface: StickerSet
 * This object represents a sticker set.
 * 
 * Read more: https://core.telegram.org/bots/api#stickerset
 */
interface StickerSet {
    /* Sticker set name */
    name: string
    /* Sticker set title */
    title: string
    /* Type of stickers in the set, currently one of "regular", "mask", "custom_emoji" */
    sticker_type: string
    /* True, if the sticker set contains animated stickers */
    is_animated: boolean
    /* True, if the sticker set contains video stickers */
    is_video: boolean
    /* List of all set stickers */
    stickers: Array<Sticker>
    /* Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
    thumbnail?: PhotoSize
}

/**
 * Interface: MaskPosition
 * This object describes the position on faces where a mask should be placed by default.
 * 
 * Read more: https://core.telegram.org/bots/api#maskposition
 */
interface MaskPosition {
    /* The part of the face relative to which the mask should be placed. One of "forehead", "eyes", "mouth", or "chin". */
    point: string
    /* Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: string | number
    /* Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: string | number
    /* Mask scaling coefficient. For example, 2.0 means double size. */
    scale: string | number
}

/**
 * Interface: InputSticker
 * This object describes a sticker to be added to a sticker set.
 * 
 * Read more: https://core.telegram.org/bots/api#inputsticker
 */
interface InputSticker {
    /* The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files: https://core.telegram.org/bots/api#sending-files */
    sticker: InputFile | string
    /* List of 1-20 emoji associated with the sticker */
    emoji_list: Array<string>
    /* Optional. Position where the mask should be placed on faces. For "mask" stickers only. */
    mask_position?: MaskPosition
    /* Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For "regular" and "custom_emoji" stickers only. */
    keywords?: Array<string>
}

/**
 * Interface: InlineQuery
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequery
 */
interface InlineQuery {
    /* Unique identifier for this query */
    id: string
    /* Sender */
    from: User
    /* Text of the query (up to 256 characters) */
    query: string
    /* Offset of the results to be returned, can be controlled by the bot */
    offset: string
    /* Optional. Type of the chat from which the inline query was sent. Can be either "sender" for a private chat with the inline query sender, "private", "group", "supergroup", or "channel". The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type?: string
    /* Optional. Sender location, only for bots that request user location */
    location?: Location
}

/**
 * Interface: InlineQueryResultsButton
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultsbutton
 */
interface InlineQueryResultsButton {
    /* Label text on the button */
    text: string
    /* Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
    web_app?: WebAppInfo
    /* Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
    start_parameter?: string
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
    type: string
    /* Unique identifier for this result, 1-64 Bytes */
    id: string
    /* Title of the result */
    title: string
    /* Content of the message to be sent */
    input_message_content: InputMessageContent
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. URL of the result */
    url?: string
    /* Optional. Pass True if you don't want the URL to be shown in the message */
    hide_url?: boolean
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: string
    /* Optional. Thumbnail width */
    thumbnail_width?: string | number
    /* Optional. Thumbnail height */
    thumbnail_height?: string | number
}

/**
 * Interface: InlineQueryResultPhoto
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultphoto
 */
interface InlineQueryResultPhoto {
    /* Type of the result, must be photo */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    photo_url: string
    /* URL of the thumbnail for the photo */
    thumbnail_url: string
    /* Optional. Width of the photo */
    photo_width?: string | number
    /* Optional. Height of the photo */
    photo_height?: string | number
    /* Optional. Title for the result */
    title?: string
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultGif
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultgif
 */
interface InlineQueryResultGif {
    /* Type of the result, must be gif */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: string
    /* URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: string
    /* Optional. Width of the GIF */
    gif_width?: string | number
    /* Optional. Height of the GIF */
    gif_height?: string | number
    /* Optional. Duration of the GIF in seconds */
    gif_duration?: string | number
    /* Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg" */
    thumbnail_mime_type?: string
    /* Optional. Title for the result */
    title?: string
    /* Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultMpeg4Gif
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
 */
interface InlineQueryResultMpeg4Gif {
    /* Type of the result, must be mpeg4_gif */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL for the MPEG4 file. File size must not exceed 1MB */
    mpeg4_url: string
    /* URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: string
    /* Optional. Video width */
    mpeg4_width?: string | number
    /* Optional. Video height */
    mpeg4_height?: string | number
    /* Optional. Video duration in seconds */
    mpeg4_duration?: string | number
    /* Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg" */
    thumbnail_mime_type?: string
    /* Optional. Title for the result */
    title?: string
    /* Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultVideo
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultvideo
 */
interface InlineQueryResultVideo {
    /* Type of the result, must be video */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL for the embedded video player or video file */
    video_url: string
    /* MIME type of the content of the video URL, "text/html" or "video/mp4" */
    mime_type: string
    /* URL of the thumbnail (JPEG only) for the video */
    thumbnail_url: string
    /* Title for the result */
    title: string
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Video width */
    video_width?: string | number
    /* Optional. Video height */
    video_height?: string | number
    /* Optional. Video duration in seconds */
    video_duration?: string | number
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL for the audio file */
    audio_url: string
    /* Title */
    title: string
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Performer */
    performer?: string
    /* Optional. Audio duration in seconds */
    audio_duration?: string | number
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid URL for the voice recording */
    voice_url: string
    /* Recording title */
    title: string
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Recording duration in seconds */
    voice_duration?: string | number
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the voice recording */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* Title for the result */
    title: string
    /* A valid URL for the file */
    document_url: string
    /* MIME type of the content of the file, either "application/pdf" or "application/zip" */
    mime_type: string
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent
    /* Optional. URL of the thumbnail (JPEG only) for the file */
    thumbnail_url?: string
    /* Optional. Thumbnail width */
    thumbnail_width?: string | number
    /* Optional. Thumbnail height */
    thumbnail_height?: string | number
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
    type: string
    /* Unique identifier for this result, 1-64 Bytes */
    id: string
    /* Location latitude in degrees */
    latitude: string | number
    /* Location longitude in degrees */
    longitude: string | number
    /* Location title */
    title: string
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: string | number
    /* Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: string | number
    /* Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: string | number
    /* Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: string | number
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the location */
    input_message_content?: InputMessageContent
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: string
    /* Optional. Thumbnail width */
    thumbnail_width?: string | number
    /* Optional. Thumbnail height */
    thumbnail_height?: string | number
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
    type: string
    /* Unique identifier for this result, 1-64 Bytes */
    id: string
    /* Latitude of the venue location in degrees */
    latitude: string | number
    /* Longitude of the venue location in degrees */
    longitude: string | number
    /* Title of the venue */
    title: string
    /* Address of the venue */
    address: string
    /* Optional. Foursquare identifier of the venue if known */
    foursquare_id?: string
    /* Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: string
    /* Optional. Google Places identifier of the venue */
    google_place_id?: string
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the venue */
    input_message_content?: InputMessageContent
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: string
    /* Optional. Thumbnail width */
    thumbnail_width?: string | number
    /* Optional. Thumbnail height */
    thumbnail_height?: string | number
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
    type: string
    /* Unique identifier for this result, 1-64 Bytes */
    id: string
    /* Contact's phone number */
    phone_number: string
    /* Contact's first name */
    first_name: string
    /* Optional. Contact's last name */
    last_name?: string
    /* Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the contact */
    input_message_content?: InputMessageContent
    /* Optional. Url of the thumbnail for the result */
    thumbnail_url?: string
    /* Optional. Thumbnail width */
    thumbnail_width?: string | number
    /* Optional. Thumbnail height */
    thumbnail_height?: string | number
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* Short name of the game */
    game_short_name: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
}

/**
 * Interface: InlineQueryResultCachedPhoto
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 */
interface InlineQueryResultCachedPhoto {
    /* Type of the result, must be photo */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier of the photo */
    photo_file_id: string
    /* Optional. Title for the result */
    title?: string
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultCachedGif
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedgif
 */
interface InlineQueryResultCachedGif {
    /* Type of the result, must be gif */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier for the GIF file */
    gif_file_id: string
    /* Optional. Title for the result */
    title?: string
    /* Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultCachedMpeg4Gif
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
 */
interface InlineQueryResultCachedMpeg4Gif {
    /* Type of the result, must be mpeg4_gif */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier for the MPEG4 file */
    mpeg4_file_id: string
    /* Optional. Title for the result */
    title?: string
    /* Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier of the sticker */
    sticker_file_id: string
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the sticker */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* Title for the result */
    title: string
    /* A valid file identifier for the file */
    document_file_id: string
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent
}

/**
 * Interface: InlineQueryResultCachedVideo
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * 
 * Read more: https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
 */
interface InlineQueryResultCachedVideo {
    /* Type of the result, must be video */
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier for the video file */
    video_file_id: string
    /* Title for the result */
    title: string
    /* Optional. Short description of the result */
    description?: string
    /* Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the video */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier for the voice message */
    voice_file_id: string
    /* Voice message title */
    title: string
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the voice message */
    input_message_content?: InputMessageContent
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
    type: string
    /* Unique identifier for this result, 1-64 bytes */
    id: string
    /* A valid file identifier for the audio file */
    audio_file_id: string
    /* Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string
    /* Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>
    /* Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup
    /* Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent
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
    message_text: string
    /* Optional. Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: string
    /* Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: Array<MessageEntity>
    /* Optional. Disables link previews for links in the sent message */
    disable_web_page_preview?: boolean
}

/**
 * Interface: InputLocationMessageContent
 * Represents the content of a location message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputlocationmessagecontent
 */
interface InputLocationMessageContent {
    /* Latitude of the location in degrees */
    latitude: string | number
    /* Longitude of the location in degrees */
    longitude: string | number
    /* Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: string | number
    /* Optional. Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: string | number
    /* Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: string | number
    /* Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: string | number
}

/**
 * Interface: InputVenueMessageContent
 * Represents the content of a venue message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputvenuemessagecontent
 */
interface InputVenueMessageContent {
    /* Latitude of the venue in degrees */
    latitude: string | number
    /* Longitude of the venue in degrees */
    longitude: string | number
    /* Name of the venue */
    title: string
    /* Address of the venue */
    address: string
    /* Optional. Foursquare identifier of the venue, if known */
    foursquare_id?: string
    /* Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".) */
    foursquare_type?: string
    /* Optional. Google Places identifier of the venue */
    google_place_id?: string
    /* Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string
}

/**
 * Interface: InputContactMessageContent
 * Represents the content of a contact message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
interface InputContactMessageContent {
    /* Contact's phone number */
    phone_number: string
    /* Contact's first name */
    first_name: string
    /* Optional. Contact's last name */
    last_name?: string
    /* Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string
}

/**
 * Interface: InputInvoiceMessageContent
 * Represents the content of an invoice message to be sent as the result of an inline query.
 * 
 * Read more: https://core.telegram.org/bots/api#inputinvoicemessagecontent
 */
interface InputInvoiceMessageContent {
    /* Product name, 1-32 characters */
    title: string
    /* Product description, 1-255 characters */
    description: string
    /* Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string
    /* Payment provider token, obtained via @BotFather */
    provider_token: string
    /* Three-letter ISO 4217 currency code, see more on currencies */
    currency: string
    /* Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
    prices: Array<LabeledPrice>
    /* Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 */
    max_tip_amount?: string | number
    /* Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Array<string | number>
    /* Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data?: string
    /* Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: string
    /* Optional. Photo size in bytes */
    photo_size?: string | number
    /* Optional. Photo width */
    photo_width?: string | number
    /* Optional. Photo height */
    photo_height?: string | number
    /* Optional. Pass True if you require the user's full name to complete the order */
    need_name?: boolean
    /* Optional. Pass True if you require the user's phone number to complete the order */
    need_phone_number?: boolean
    /* Optional. Pass True if you require the user's email address to complete the order */
    need_email?: boolean
    /* Optional. Pass True if you require the user's shipping address to complete the order */
    need_shipping_address?: boolean
    /* Optional. Pass True if the user's phone number should be sent to provider */
    send_phone_number_to_provider?: boolean
    /* Optional. Pass True if the user's email address should be sent to provider */
    send_email_to_provider?: boolean
    /* Optional. Pass True if the final price depends on the shipping method */
    is_flexible?: boolean
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
    result_id: string
    /* The user that chose the result */
    from: User
    /* The query that was used to obtain the result */
    query: string
    /* Optional. Sender location, only for bots that require user location */
    location?: Location
    /* Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id?: string
}

/**
 * Interface: SentWebAppMessage
 * Describes an inline message sent by a Web App on behalf of a user.
 * 
 * Read more: https://core.telegram.org/bots/api#sentwebappmessage
 */
interface SentWebAppMessage {
    /* Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
    inline_message_id?: string
}

/**
 * Interface: LabeledPrice
 * This object represents a portion of the price for goods or services.
 * 
 * Read more: https://core.telegram.org/bots/api#labeledprice
 */
interface LabeledPrice {
    /* Portion label */
    label: string
    /* Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: string | number
}

/**
 * Interface: Invoice
 * This object contains basic information about an invoice.
 * 
 * Read more: https://core.telegram.org/bots/api#invoice
 */
interface Invoice {
    /* Product name */
    title: string
    /* Product description */
    description: string
    /* Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: string
    /* Three-letter ISO 4217 currency code */
    currency: string
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: string | number
}

/**
 * Interface: ShippingAddress
 * This object represents a shipping address.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingaddress
 */
interface ShippingAddress {
    /* Two-letter ISO 3166-1 alpha-2 country code */
    country_code: string
    /* State, if applicable */
    state: string
    /* City */
    city: string
    /* First line for the address */
    street_line1: string
    /* Second line for the address */
    street_line2: string
    /* Address post code */
    post_code: string
}

/**
 * Interface: OrderInfo
 * This object represents information about an order.
 * 
 * Read more: https://core.telegram.org/bots/api#orderinfo
 */
interface OrderInfo {
    /* Optional. User name */
    name?: string
    /* Optional. User's phone number */
    phone_number?: string
    /* Optional. User email */
    email?: string
    /* Optional. User shipping address */
    shipping_address?: ShippingAddress
}

/**
 * Interface: ShippingOption
 * This object represents one shipping option.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingoption
 */
interface ShippingOption {
    /* Shipping option identifier */
    id: string
    /* Option title */
    title: string
    /* List of price portions */
    prices: Array<LabeledPrice>
}

/**
 * Interface: SuccessfulPayment
 * This object contains basic information about a successful payment.
 * 
 * Read more: https://core.telegram.org/bots/api#successfulpayment
 */
interface SuccessfulPayment {
    /* Three-letter ISO 4217 currency code */
    currency: string
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: string | number
    /* Bot specified invoice payload */
    invoice_payload: string
    /* Telegram payment identifier */
    telegram_payment_charge_id: string
    /* Provider payment identifier */
    provider_payment_charge_id: string
    /* Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: string
    /* Optional. Order information provided by the user */
    order_info?: OrderInfo
}

/**
 * Interface: ShippingQuery
 * This object contains information about an incoming shipping query.
 * 
 * Read more: https://core.telegram.org/bots/api#shippingquery
 */
interface ShippingQuery {
    /* Unique query identifier */
    id: string
    /* User who sent the query */
    from: User
    /* Bot specified invoice payload */
    invoice_payload: string
    /* User specified shipping address */
    shipping_address: ShippingAddress
}

/**
 * Interface: PreCheckoutQuery
 * This object contains information about an incoming pre-checkout query.
 * 
 * Read more: https://core.telegram.org/bots/api#precheckoutquery
 */
interface PreCheckoutQuery {
    /* Unique query identifier */
    id: string
    /* User who sent the query */
    from: User
    /* Three-letter ISO 4217 currency code */
    currency: string
    /* Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: string | number
    /* Bot specified invoice payload */
    invoice_payload: string
    /* Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: string
    /* Optional. Order information provided by the user */
    order_info?: OrderInfo
}

/**
 * Interface: PassportData
 * Describes Telegram Passport data shared with the bot by the user.
 * 
 * Read more: https://core.telegram.org/bots/api#passportdata
 */
interface PassportData {
    /* Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: Array<EncryptedPassportElement>
    /* Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials
}

/**
 * Interface: PassportFile
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 * 
 * Read more: https://core.telegram.org/bots/api#passportfile
 */
interface PassportFile {
    /* Identifier for this file, which can be used to download or reuse the file */
    file_id: string
    /* Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string
    /* File size in bytes */
    file_size: string | number
    /* Unix time when the file was uploaded */
    file_date: string | number
}

/**
 * Interface: EncryptedPassportElement
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 * 
 * Read more: https://core.telegram.org/bots/api#encryptedpassportelement
 */
interface EncryptedPassportElement {
    /* Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", "email". */
    type: string
    /* Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: string
    /* Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data?: string
    /* Optional. User's verified phone number, available only for "phone_number" type */
    phone_number?: string
    /* Optional. User's verified email address, available only for "email" type */
    email?: string
    /* Optional. Array of encrypted files with documents provided by the user, available for "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files?: Array<PassportFile>
    /* Optional. Encrypted file with the front side of the document, provided by the user. Available for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: PassportFile
    /* Optional. Encrypted file with the reverse side of the document, provided by the user. Available for "driver_license" and "identity_card". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: PassportFile
    /* Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: PassportFile
    /* Optional. Array of encrypted files with translated versions of documents provided by the user. Available if requested for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: Array<PassportFile>
}

/**
 * Interface: EncryptedCredentials
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 * 
 * Read more: https://core.telegram.org/bots/api#encryptedcredentials
 */
interface EncryptedCredentials {
    /* Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: string
    /* Base64-encoded data hash for data authentication */
    hash: string
    /* Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: string
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
    source: string
    /* The section of the user's Telegram Passport which has the error, one of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address" */
    type: string
    /* Name of the data field which has the error */
    field_name: string
    /* Base64-encoded data hash */
    data_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorFrontSide
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
interface PassportElementErrorFrontSide {
    /* Error source, must be front_side */
    source: string
    /* The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport" */
    type: string
    /* Base64-encoded hash of the file with the front side of the document */
    file_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorReverseSide
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
interface PassportElementErrorReverseSide {
    /* Error source, must be reverse_side */
    source: string
    /* The section of the user's Telegram Passport which has the issue, one of "driver_license", "identity_card" */
    type: string
    /* Base64-encoded hash of the file with the reverse side of the document */
    file_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorSelfie
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorselfie
 */
interface PassportElementErrorSelfie {
    /* Error source, must be selfie */
    source: string
    /* The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport" */
    type: string
    /* Base64-encoded hash of the file with the selfie */
    file_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorFile
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfile
 */
interface PassportElementErrorFile {
    /* Error source, must be file */
    source: string
    /* The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: string
    /* Base64-encoded file hash */
    file_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorFiles
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorfiles
 */
interface PassportElementErrorFiles {
    /* Error source, must be files */
    source: string
    /* The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: string
    /* List of base64-encoded file hashes */
    file_hashes: Array<string>
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorTranslationFile
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
interface PassportElementErrorTranslationFile {
    /* Error source, must be translation_file */
    source: string
    /* Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: string
    /* Base64-encoded file hash */
    file_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorTranslationFiles
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 */
interface PassportElementErrorTranslationFiles {
    /* Error source, must be translation_files */
    source: string
    /* Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration" */
    type: string
    /* List of base64-encoded file hashes */
    file_hashes: Array<string>
    /* Error message */
    message: string
}

/**
 * Interface: PassportElementErrorUnspecified
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * 
 * Read more: https://core.telegram.org/bots/api#passportelementerrorunspecified
 */
interface PassportElementErrorUnspecified {
    /* Error source, must be unspecified */
    source: string
    /* Type of element of the user's Telegram Passport which has the issue */
    type: string
    /* Base64-encoded element hash */
    element_hash: string
    /* Error message */
    message: string
}

/**
 * Interface: Game
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * 
 * Read more: https://core.telegram.org/bots/api#game
 */
interface Game {
    /* Title of the game */
    title: string
    /* Description of the game */
    description: string
    /* Photo that will be displayed in the game message in chats. */
    photo: Array<PhotoSize>
    /* Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text?: string
    /* Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities?: Array<MessageEntity>
    /* Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation?: Animation
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
    position: string | number
    /* User */
    user: User
    /* Score */
    score: string | number
}