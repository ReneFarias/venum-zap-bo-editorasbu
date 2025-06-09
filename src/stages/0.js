import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
    👋 Olá, como vai?
      Eu sou a Bianca, a *assistente virtual* da ${venombot.getSessionName}.
      
      Aqui está o Link para o LIVRO: 
      https://editorasbu8570.atomicatpages.com/capilar/

      *Digita 0 para falar com o Atendente ou dar feedback 🙋
      -----------------------------------
     
      0️⃣ - FALAR COM ATENDENTE
    `
    
    
    
    
    
    
    /*`
      👋 Olá, como vai?
      Eu sou Carlos, o *assistente virtual* da ${venombot.getSessionName}.
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - FAZER PEDIDO
      2️⃣ - VERIFICAR TAXA DE ENTREGA
      0️⃣ - FALAR COM ATENDENTE
    `*/
    await venombot.sendText({ to: from, message })
  },
}
