import { WechatyBuilder } from 'wechaty'
import Handler from './handler.js'

const handler = new Handler('test')

const wechaty = WechatyBuilder.build() // get a Wechaty instance
wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login', user => console.log(`User ${user} logged in`))
  .on('message', async message => {
    console.log(`Message: ${message}`)
    await handler.handle(message)
  })
wechaty.start()
