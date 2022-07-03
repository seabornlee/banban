export default class Parser {
  constructor(text) {
    this.text = text
    this.arrayOfLines = this.text.match(/[^\r\n]+/g);
  }

  getDuration() {
    const durationLine = this.arrayOfLines.find((text) => { return text.indexOf("练习时长：") > -1 })
    if (durationLine.endsWith("分钟")) {
      const text = durationLine.split("：")[1]
      const mins = text.substring(0, text.length - 2)
      return parseInt(mins)
    }
  }

  getStudentName() {
    const line = this.arrayOfLines.find((text) => { return text.indexOf("姓名：") > -1 })
    return line.split("：")[1]
  }
}
