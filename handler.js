import Parser from './parser.js'

export default class Handler {
  constructor(topic) {
    this.topic = topic
  }

  async handle(msg) {
    const room = msg.room()
    if (!room) {
      return
    }

    const topic = room.topic()
    if (topic !== this.topic) {
      return 
    }

    const text = await msg.text()
    const parser = new Parser(text)
    console.log(parse.getDuration());
    console.log(parse.getStudentName());
  }
}
