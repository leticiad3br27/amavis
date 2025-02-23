"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 320;
    const duration = 2000;
    const step = (end - start) / (duration / 50);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCounter(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>AMAVI - Associação de Pais e Amigos dos Autistas de Vilhena</h1>
      </header>

      <section className={styles.hero}>
        <h2>Bem-vindo à AMAVI</h2>
        <p>Apoio, inclusão e desenvolvimento para pessoas com autismo em Vilhena.</p>
      </section>

      <section className={styles.stats}>
        <div className={styles.card}>
          <h3>Pessoas Ajudadas</h3>
          <p>{counter}+</p>
        </div>
        <div className={styles.card}>
          <h3>Atendimentos</h3>
          <p>Psicologia, Terapia Ocupacional, Fonoaudiologia, Assistência Social</p>
        </div>
        <div className={styles.card}>
          <h3>Endereço</h3>
          <p>Rua Exemplo, 123, Vilhena - RO</p>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Nossos Atendimentos</h2>
        <p>A AMAVI oferece atendimentos especializados para auxiliar no desenvolvimento das pessoas com autismo.</p>
        <ul>
          <li><strong>Psicologia:</strong> Terapia cognitivo-comportamental para ajudar no desenvolvimento emocional e social.</li>
          <li><strong>Terapia Ocupacional:</strong> Estratégias para melhorar a autonomia nas atividades diárias.</li>
          <li><strong>Fonoaudiologia:</strong> Auxílio no desenvolvimento da comunicação e linguagem.</li>
          <li><strong>Assistência Social:</strong> Suporte para famílias com orientações sobre direitos e benefícios.</li>
          <li><strong>Educação Especial:</strong> Apoio pedagógico para crianças e adolescentes com dificuldades de aprendizado.</li>
          <li><strong>Treinamento para Pais:</strong> Oficinas para ensinar estratégias de convivência e apoio.</li>
        </ul>
      </section>

      <section className={styles.howToHelp}>
        <h2>Como Você Pode Ajudar</h2>
        <p>Apoie a AMAVI e faça a diferença na vida de muitas famílias.</p>
        <ul>
          <li><strong>Doações:</strong> Contribua com recursos financeiros ou materiais.</li>
          <li><strong>Voluntariado:</strong> Participe de nossas ações e eventos.</li>
          <li><strong>Divulgação:</strong> Ajude a compartilhar nossa causa nas redes sociais.</li>
          <li><strong>Parcerias:</strong> Empresas podem apoiar nossos projetos e campanhas.</li>
          <li><strong>Eventos Beneficentes:</strong> Participe de bazares, palestras e encontros organizados pela AMAVI.</li>
        </ul>
      </section>

      <section className={styles.diagnosis}>
        <h2>Importância do Diagnóstico Precoce</h2>
        <p>Identificar sinais de autismo nos primeiros anos de vida pode fazer toda a diferença no desenvolvimento da criança.</p>
        <p>Sinais comuns incluem:</p>
        <ul>
          <li>Dificuldade na interação social.</li>
          <li>Atraso na fala e na comunicação.</li>
          <li>Comportamentos repetitivos.</li>
          <li>Sensibilidade sensorial elevada.</li>
          <li>Falta de contato visual.</li>
        </ul>
        <p>Quanto mais cedo uma criança for diagnosticada, mais eficaz será o tratamento e suporte que poderá receber.</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Relatos de Quem Já Foi Ajudado</h2>
        <div className={styles.testimonial}>
          <p><strong>Maria Silva, mãe do João:</strong> "Meu filho foi acolhido com carinho e hoje se comunica muito melhor!"</p>
        </div>
        <div className={styles.testimonial}>
          <p><strong>José Ferreira:</strong> "Os grupos de apoio me ajudaram a encontrar minha identidade como adulto autista."</p>
        </div>
        <div className={styles.testimonial}>
          <p><strong>Ana Paula, voluntária:</strong> "Fazer parte desse projeto me transformou como pessoa. É gratificante ver o impacto do nosso trabalho."</p>
        </div>
        <div className={styles.testimonial}>
          <p><strong>Lucas Almeida, pai do Gabriel:</strong> "Meu filho melhorou muito na escola depois do acompanhamento na AMAVI. Sou muito grato!"</p>
        </div>
        <div className={styles.testimonial}>
          <p><strong>Carla Santos:</strong> "A AMAVI nos ajudou a encontrar um caminho para que minha filha Alice se desenvolvesse melhor socialmente."</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 AMAVI - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
