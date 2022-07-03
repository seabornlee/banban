import Parser from './parser.js'

describe('Parser', () => {
  const text = `
    姓名：张三
    练习时长：20分钟
    练习内容：重构项目
    传输链接：https://cowtransfer.com/s/5a9b0efb001c48 或 打开【奶牛快传】cowtransfer.com 使用传输口令：mm80y9 提取；
    感受: 敲了一遍，还有很多地方使用快捷键不熟练，需要长期训练才行
  `
  it('should parse duration', () => {
    const parser = new Parser(text)
    expect(parser.getDuration()).toBe(20)
  });

  it('should parse student name', () => {
    const parser = new Parser(text)
    expect(parser.getStudentName()).toBe("张三")
  });
});
