export default class Parser {
  constructor(text) {
    this.text = text
    this.arrayOfLines = this.text.match(/[^\r\n]+/g);
  }

  getDuration() {
    const durationLine = this.arrayOfLines.find((text) => { return text.indexOf("练习时长") > -1 })

    let splitter = "："
    if (durationLine.indexOf(":") > -1) {
      splitter = ":"
    }

    const text = durationLine.split(splitter)[1]
    if (text.endsWith("分钟")) {
      const mins = text.substring(0, text.length - 2)
      return parseInt(mins)
    }

    if (text.endsWith("h") || text.endsWith("H")) {
      const mins = text.substring(0, text.length - 1)
      return parseInt(mins) * 60
    }

    if (text.endsWith("小时")) {
      const mins = text.match(/\d+/)
      return parseInt(mins) * 60
    }
  }

  getStudentName() {
    const line = this.arrayOfLines.find((text) => { return text.indexOf("姓名：") > -1 })
    return line.split("：")[1]
  }
}
