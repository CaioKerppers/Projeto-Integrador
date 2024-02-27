import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/model/services/firebase.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  aparelhos = [
    {
      nome: 'Ergoespirométrico',
      imagem: 'assets/img/ergoespirometria.jpg',
      descricao: 'O teste ergoespirométrico é uma junção do teste ergométrico convencional e uma análise de dados e parâmetros respiratórios.',
      equipamentosusados: 'Equipamentos',
      equipamentos: 'Ergômetro: dispositivo utilizado para aplicar uma carga progressiva durante o teste.\n\nMáscara facial: utilizada para coletar as trocas de ar.\n\nAnalisador de gases: equipamento que mede a concentração de O2 e CO2.\n\nEletrocardiógrafo (ECG): equipamento utilizado para monitorar o ritmo cardíaco.\n\nMonitor de pressão arterial: equipamento utilizado para medir a pressão arterial.',
      paraqueserve: 'Para que serve ?',
      utilidade: 'Avaliação da capacidade física de atletas\n\nPrescrição de exercícios físicos.\n\nDiagnóstico e acompanhamento de doenças respiratórias e cardiovasculares.\n\nAvaliação da eficácia de tratamentos.\n\nIdentificação de limitações físicas e funcionais.',
      contraindicacao: '5 principais contraindicações da ergoespirometria',
      indicacao1: 'Infarto agudo do miocárdio recente',
      indicacao2: '\n\nHipertensão arterial grave e descontrolada',
      indicacao3: '\n\nInsuficiência cardíaca descompensada',
      indicacao4: '\n\nAneurisma aórtico dissecente',
      indicacao5: '\n\nGravidez',
      pre_teste: '\n\nPré-Teste',
      img1: '\n\nassets/img/jejum.png',
      descimg1: '\n\nJejum de 2 a 3 horas antes do teste',
      img2: '\n\nassets/img/fumar.png',
      descimg2: '\n\nTabaco por 24 horas antes do teste',
      img3: '\n\nassets/img/beber.jpg',
      descimg3: '\n\nEvitar cafeína e bebidas alcoólicas por 24 horas antes do teste',
      img4: '\n\nassets/img/confortavel.png',
      descimg4: 'Uso de roupas e calçados confortáveis para a prática de atividades físicas',
      resultados: 'Resultados',
      result1: 'VO2 máximo:',
      result1ex: 'Homens: pode variar de 20-25 mL/kg/min (sedentários e com idade acima de 50 anos) até 60-70 mL/kg/min (atletas de elite).\n\nMulheres: pode variar de 15-20 mL/kg/min (sedentárias e com idade acima de 50 anos) até 50-60 mL/kg/min (atletas de elite)',
      importa: '\n\n IMPORTANTE ',
      importante: '\n\nOs valores de referência variam em  diversos fatores, como idade, sexo, nível de atividade física e estado de saúde do paciente. Além disso, os valores de referência também podem variar de acordo com o equipamento utilizado na avaliação.',
      result2: '\n\nLimiar anaeróbio: ',
      result2ex: '\n\nHomens: pode variar de 50-70% da frequência cardíaca máxima.\n\nMulheres: pode variar de 40-60% da frequência cardíaca máxima.',
      result3: '\n\nEficiência ventilatória: ',
      result3ex: '\n\nHomens: pode variar de 30-50 mL/L\n\nMulheres: pode variar de 20-40 mL/L',
      result4: '\n\nFrequência cardíaca máxima: ',
      result4ex: '\n\nPode ser calculada pela fórmula 220 - idade',
      pos_teste: '\n\nPós-Teste',
      dica1: '\n\nO paciente deve permanecer em repouso por alguns minutos após o término do teste. É recomendado que ele fique sentado ou deitado para ajudar na recuperação cardiovascular.',
      dica2: '\n\nDurante e após o teste, é importante que o paciente se mantenha hidratado.',
      dica3: 'O paciente deve ser monitorado continuamente durante o período de recuperação para avaliar a frequência cardíaca, a pressão arterial e outros sinais vitais.'

    },
    {
      nome: 'Dinamômetro',
      descricao: 'Dinamômetro é um instrumento de medição que permite medir a força ou a potência de um objeto ou ser humano.',
      equipamentosusados: 'Equipamentos',
      equipamentos: 'Acessórios de fixação: almofadas, cintas ou outras peças utilizadas para fixar o dinamômetro de forma segura e confortável no antebraço do paciente.\n\nComputador ou dispositivo de registro de dados: ',
      paraqueserve: 'Para que serve ?',
      utilidade: 'O dinamômetro é utilizado para avaliar a força muscular em diferentes grupos musculares.\n\nEle pode ser usado para avaliar a força máxima, resistência muscular ou assimetria muscular.\n\nOs resultados obtidos podem ser utilizados para diagnosticar disfunções musculares, identificar desequilíbrios musculares, monitorar o progresso de programas de treinamento físico ou reabilitação e prevenir lesões.',
      contraindicacao: '5 principais contraindicações ',
      indicacao1: 'Lesões agudas ou crônicas ',
      indicacao2: '\n\nDor ou desconforto muscular intenso durante o movimento avaliado;',
      indicacao3: '\n\nInsuficiência cardíaca descompensada',
      indicacao4: '\n\nFraturas recentes',
      indicacao5: '\n\nInflamação aguda em articulações;',
      pre_teste: 'Pré-Teste',
      img1: '\n\n assets/img/noexercise.png',
      descimg1: '\n\nOrientar o paciente a não fazer  exercícios físicos extenuantes ou atividades que possam causar fadiga muscular nas 24 horas anteriores ao teste;',
      img2: '\n\nassets/img/alongamento.png',
      descimg2: '\n\nRealizar um aquecimento prévio com exercícios de alongamento e mobilidade para os músculos que serão avaliados;',
      img3: '\n\nassets/img/esclarecer.png',
      descimg3: '\n\nPosicionar o paciente em uma posição estável e adequada para a realização do teste;',
      img4: '\n\nassets/img/posicao.jpg',
      descimg4: 'Explicar claramente ao paciente o procedimento e fornecer instruções precisas sobre como executar o movimento;',
      resultados: 'Resultados',
      result1: 'Força muscular relativa:',
      result1ex: 'Flexão do joelho: FR média de 1,4 a 1,8 N/kg para homens e 1,2 a 1,6 N/kg para mulheres.\n\nFlexão do cotovelo: FR média de 1,0 a 1,3 N/kg para homens e 0,7 a 1,0 N/kg para mulheres\n\n Extensão do cotovelo: FR média de 1,2 a 1,6 N/kg para homens e 0,9 a 1,2 N/kg para mulheres.\n\n Extensão do joelho: FR média de 2,0 a 2,5 N/kg para homens e 1,5 a 2,0 N/kg para mulheres\n\n',
      importa: '\n\n IMPORTANTE ',
      importante: '\n\nOs valores de referência variam em  diversos fatores, como idade, sexo, nível de atividade física e estado de saúde do paciente. Além disso, os valores de referência também podem variar de acordo com o equipamento utilizado na avaliação.',
      restul2: '\n\nForça muscular máxima (FM) Masculino ',
      result2ex: '\n\nForça de preensão manual:  30 e 45 kg.\n\nForça de flexão de cotovelo:  30 de 50 kg \n\nForça de extensão de joelho:  80 de 120 kg.\n\nForça de extensão de punho:  20 de 35\n\nForça de flexão de joelho:  80 de 120 kg\n\nForça de abdução de ombro: 8 de 12 kg\n\nForça de adução de ombro:  8 de 12 kg\n\nForça de extensão de ombro: 5 de 8 kg\n\nForça de flexão de tronco:  80 de 120 kg',
      result3: '\n\nForça muscular máxima (FM) Feminino',
      result3ex: '\n\nForça de preensão manual: entre 20 e 30 kg\n\nForça de flexão de cotovelo: entre 20 e 35 kg\n\nForça de extensão de joelho: entre 60 e 80 kg \n\nForça de extensão de punho: entre 12 e 20 kg\n\nForça de flexão de joelho: entre 60 e 80 kg \n\nForça de abdução de ombro: entre 5 e 8 kg \n\nForça de adução de ombro: entre 5 e 8 kg \n\nForça de extensão de ombro: entre 3 e 5 kg \n\nForça de flexão de tronco: entre 60 e 80 kg',
      result4: '\n\n',
      result4ex: '\n\n',
      pos_teste: '\n\nPós-Teste',
      dica1: '\n\nDescanso: O paciente deve permanecer em repouso por alguns minutos após o término do teste. É recomendado que ele fique sentado ou deitado para ajudar na recuperação cardiovascular.',
      dica2: '\n\nHidratação: Durante e após o teste, é importante que o paciente se mantenha hidratado. ',
      dica3: '\n\nMonitoramento: O paciente deve ser monitorado continuamente durante o período de recuperação para avaliar a frequência cardíaca, a pressão arterial e outros sinais vitais.'
    },
    {
      nome: 'Powerbreathe K5',
    imagem: 'assets/img/powerbreathe.jpg',
    descricao: 'O Powerbreathe K5: dispositivo portátil para treinamento respiratório, melhora força e resistência dos músculos respiratórios.',
    equipamentosusados: 'Equipamentos',
    equipamentos: 'Powerbreathe K5 (dispositivo de treinamento respiratório)\n\nComputador ou dispositivo móvel com software ou aplicativo para análise dos dados respiratórios\n\nSensor de frequência cardíaca (opcional)\n\nCronômetro (opcional)',
    paraqueserve: 'Melhorar a força e resistência dos músculos respiratórios\n\nAumentar a capacidade pulmonar\n\nAvaliar a força muscular inspiratória dinâmica\n\nAprimorar o desempenho atlético em esportes que envolvem resistência respiratória\n\nMelhorar a função respiratória em condições respiratórias crônicas, como asma ou doença pulmonar obstrutiva crônica (DPOC)',
    utilidade: 'Utilidade do Powerbreathe K5.',
    contraindicacao: 'Contraindicações do Powerbreathe K5',
    indicacao1: 'Pneumotórax recente',
    indicacao2: 'Hemoptise (expectoração de sangue)',
    indicacao3: 'Dor torácica aguda',
    indicacao4: 'Pressão arterial descontrolada',
    indicacao5: 'Distúrbios cardíacos graves não controlados',
    pre_teste: 'Pré-Teste',
    img1: 'assets/img/jejum.png',
    descimg1: 'Evite alimentos pesados antes do teste para evitar desconforto abdominal',
    img2: 'assets/img/fumar.png',
    descimg2: 'nstruir o paciente a usar roupas confortáveis e adequadas para facilitar a respiração.',
    img3: 'assets/img/beber.jpg',
    descimg3: 'Garanta uma postura confortável e relaxada para o paciente durante o teste do Powerbreathe K5.',
    img4: 'assets/img/confortavel.png',
    descimg4: 'Realizar um aquecimento respiratório adequado para preparar os músculos respiratórios',
    resultados: 'Resultados',
    result1: 'Força muscular respiratória:',
    result1ex: 'A força dos músculos envolvidos na respiração. A  pressão inspiratória máxima (PImax) média para homens adultos saudáveis varia de 80 a 120 cmH2O e para mulheres adultas saudáveis varia de 60 a 90 cmH2O.',
    importa: '\n\n IMPORTANTE ',
    importante: '\n\nOs valores de referência variam em  diversos fatores, como idade, sexo, nível de atividade física e estado de saúde do paciente. Além disso, os valores de referência também podem variar de acordo com o equipamento utilizado na avaliação.',
    result2: '\n\nResistência muscular respiratória: ',
    result2ex: '\n\n A capacidade dos músculos respiratórios de manter uma contração ao longo do tempo. Por exemplo, o tempo médio de sustentação de uma contração inspiratória máxima (Tlim) para homens adultos saudáveis é geralmente superior a 30 segundos e para mulheres adultas saudáveis é superior a 20 segundos.',
    pos_teste: 'Pós-Teste',
    dica1: 'Descanso: O paciente deve permanecer em repouso por alguns minutos após o término do teste. É recomendado que ele fique sentado ou deitado para ajudar na recuperação cardiovascular.',
    dica2: 'Hidratação: Durante e após o teste, é importante que o paciente se mantenha hidratado.',
    dica3: 'Monitoramento: O paciente deve ser monitorado continuamente durante o período de recuperação para avaliar a frequência cardíaca, a pressão arterial e outros sinais vitais.'
    },
    {
      nome: 'Eletromiógrafo',
      descricao: 'O Eletromiógrafo é um equipamento que registra a atividade elétrica dos músculos.',
      equipamentosusados: 'Equipamentos',
      equipamentos: 'Eletromiógrafo: É o principal equipamento utilizado no exame.\n\nEletrodo: São pequenos sensores que são colocados sobre a pele do paciente, próximos aos músculos que serão examinados. \n\nCabos: São utilizados para conectar os elétrodo ao eletromiógrafo.\n\nComputador: É utilizado para armazenar e processar os dados obtidos pelo eletromiógrafo. \n\nSoftware: É utilizado para analisar os dados obtidos pelo eletromiógrafo. ',
      paraqueserve: 'Para que serve ?',
      utilidade: 'Avaliação do desempenho físico em atletas;\n\nDiagnóstico de patologias musculares, como lesões, distrofias, dentre outras;\n\nAvaliação da função muscular em indivíduos com condições neurológicas;\n\nAvaliação da efetividade de tratamentos fisioterapêuticos;\n\nAvaliação da fadiga muscular.',
      contraindicacao: '5 principais contraindicações ',
      indicacao1: 'Feridas abertas, queimaduras e infecções na pele',
      indicacao2: '\n\nIndivíduos com implantes metálicos próximos à região a ser avaliada',
      indicacao3: '\n\nGravidez',
      indicacao4: '\n\nImplante de marca-passo cardíaco',
      indicacao5: '\n\nUso de anticoagulantes',
      pre_teste: 'Pré-Teste',
      img1: '\n\n assets/img/noexercise.png',
      descimg1: '\n\nJejum de 2 a 3 horas antes do teste',
      img2: '\n\nassets/img/alongamento.png',
      descimg2: '\n\nEvitar cafeína e bebidas alcoólicas por 24 horas antes do teste;',
      img3: '\n\nassets/img/esclarecer.png',
      descimg3: '\n\nEvitar o uso de medicamentos tipo anti-inflamatório ',
      img4: '\n\nassets/img/posicao.jpg',
      descimg4: 'Uso de roupas e calçados confortáveis para a prática de atividades físicas.',
      resultados: 'Resultados',
      result1: 'Força muscular relativa:',
      result1ex: 'Flexão do joelho: FR média de 1,4 a 1,8 N/kg para homens e 1,2 a 1,6 N/kg para mulheres.\n\nFlexão do cotovelo: FR média de 1,0 a 1,3 N/kg para homens e 0,7 a 1,0 N/kg para mulheres\n\n Extensão do cotovelo: FR média de 1,2 a 1,6 N/kg para homens e 0,9 a 1,2 N/kg para mulheres.\n\n Extensão do joelho: FR média de 2,0 a 2,5 N/kg para homens e 1,5 a 2,0 N/kg para mulheres\n\n',
      importa: '\n\n IMPORTANTE ',
      importante: '\n\nOs valores de referência variam em diversos fatores, como idade, sexo, nível de atividade física e estado de saúde do paciente. Além disso, os valores de referência também podem variar de acordo com o equipamento utilizado na avaliação.',
      result2: '\n\nMúsculo Bíceps Braquial (músculo do braço):',
      result2ex: '\n\nAtividade em repouso: 0,5-2 µV\n\nAtividade voluntária máxima: 300-1.000 µV',
      result3: '\n\nForça muscular máxima (FM) Feminino',
      result3ex: '\n\nAtividade em repouso: 0,5-2 µV\n\nAtividade voluntária máxima: 200-800 µV',
      pos_teste: 'Pós-Teste',
      dica1: '\n\nDescanso: O paciente deve permanecer em repouso por alguns minutos após o término do teste. É recomendado que ele fique sentado ou deitado para ajudar na recuperação cardiovascular.',
      dica2: '\n\nHidratação: Durante e após o teste, é importante que o paciente se mantenha hidratado. ',
      dica3: '\n\nMonitoramento: O paciente deve ser monitorado continuamente durante o período de recuperação para avaliar a frequência cardíaca, a pressão arterial e outros sinais vitais.'
    }
  ];

  indiceAtual = 0;

  
  constructor(private firebaseService: FirebaseService) {}

  
  
  async ngOnInit() {
    await this.atualizarUrlsImagens(); // Adicione esta linha para chamar a atualização no início
  }

  async exibirProximoAparelho() {
    this.indiceAtual = (this.indiceAtual + 1) % this.aparelhos.length;
    await this.atualizarUrlsImagens(); // Adicione esta linha para chamar a atualização ao mudar o aparelho
  }

  async exibirAparelhoAnterior() {
    this.indiceAtual = (this.indiceAtual - 1 + this.aparelhos.length) % this.aparelhos.length;
    await this.atualizarUrlsImagens(); // Adicione esta linha para chamar a atualização ao mudar o aparelho
  }

  private async atualizarUrlsImagens() {
    // Obter URLs para as imagens no início
    const imagemAparelho = this.aparelhos[this.indiceAtual].imagem;
  
    if (imagemAparelho) {
      this.aparelhos[this.indiceAtual].imagem =
        (await this.firebaseService.getImageUrl(imagemAparelho)) || imagemAparelho;
    }
  }

  splitLines(text: string | undefined): string[] {
    return text ? text.split('\n\n') : [];
  }


 }

