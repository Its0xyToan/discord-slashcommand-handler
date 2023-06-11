const { ApplicationCommandOptionType, PermissionsBitField } = require("discord.js")


class Command {
    constructor() {
        this.name = "test"
        this.description = "Say a message"
        this.options = [
            { type: ApplicationCommandOptionType["String"], name: "message", description: "The message", required: true },
            { type: ApplicationCommandOptionType["String"], name: "choice", description: "choice example", required: false, choices: [
                    { "name": "yes", "value": "hello" },
                    { "name": "no", "value": "bye !" }
            ] }
        ]
        this.permission = PermissionsBitField.Flags.ManageMessages
    }

    async execute(interaction) {

        let message = interaction.options.getString("message")
        let choice = interaction.options.getString("choice")

        interaction.reply({ content: message + choice })

    }
}

module.exports = Command
