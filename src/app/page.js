"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

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
        <div className={styles.logoContainer}>
          <h1>AMAVI</h1>
          <p>Associação de Pais e Amigos dos Autistas de Vilhena</p>
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? styles.active : ''}>Início</button>
          <button onClick={() => setActiveTab('facilita')} className={activeTab === 'facilita' ? styles.active : ''}>FACILITA AMAVI</button>
          <button onClick={() => setActiveTab('services')} className={activeTab === 'services' ? styles.active : ''}>Serviços</button>
          <button onClick={() => setActiveTab('team')} className={activeTab === 'team' ? styles.active : ''}>Nossa Equipe</button>
          <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? styles.active : ''}>Contato</button>
        </nav>
      </header>

      {activeTab === 'home' && (
        <>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h2>Bem-vindo à AMAVI</h2>
              <p>Apoio, inclusão e desenvolvimento para pessoas com autismo em Vilhena.</p>
              <div className={styles.socialButtons}>
                <a href="https://facebook.com/amavi" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com/amavi" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
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
              <h3>Anos de Atuação</h3>
              <p>5+ anos transformando vidas</p>
            </div>
          </section>
        </>
      )}

      {activeTab === 'facilita' && (
        <section className={styles.facilita}>
          <h2>FACILITA AMAVI</h2>
          <div className={styles.facilitaContent}>
            <div className={styles.facilitaText}>
              <p>O FACILITA AMAVI é nossa plataforma digital que conecta a associação à comunidade, facilitando o acesso a informações e serviços.</p>
              
              <h3>Principais Funcionalidades:</h3>
              <ul>
                <li><strong>Cadastro Online:</strong> Novo membros podem se cadastrar facilmente</li>
                <li><strong>Agendamento:</strong> Marque consultas e atendimentos online</li>
                <li><strong>Comunicação Direta:</strong> Receba notificações e atualizações importantes</li>
                <li><strong>Materiais Educativos:</strong> Acesso a guias e recursos sobre autismo</li>
                <li><strong>Comunidade:</strong> Espaço para troca de experiências entre famílias</li>
              </ul>

              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>Cadastre-se Agora</button>
                <a 
                  href="https://amavi.dev.vilhena.ifro.edu.br/login" 
                  className={styles.secondaryButton}
                >
                  Acesse sua Conta
                </a>
              </div>
            </div>
            <div className={styles.facilitaImage}>
              <Image 
                src="/img/logoAMAVI.png" 
                alt="Plataforma FACILITA AMAVI" 
                width={500}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      )}

      {activeTab === 'services' && (
        <section className={styles.services}>
          <h2>Nossos Atendimentos</h2>
          <p>A AMAVI oferece atendimentos especializados para auxiliar no desenvolvimento das pessoas com autismo.</p>
          
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Psicologia</h3>
              <p>Terapia cognitivo-comportamental para ajudar no desenvolvimento emocional e social.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Terapia Ocupacional</h3>
              <p>Estratégias para melhorar a autonomia nas atividades diárias.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Fonoaudiologia</h3>
              <p>Auxílio no desenvolvimento da comunicação e linguagem.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Assistência Social</h3>
              <p>Suporte para famílias com orientações sobre direitos e benefícios.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Educação Especial</h3>
              <p>Apoio pedagógico para crianças e adolescentes com dificuldades de aprendizado.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Grupos de Apoio</h3>
              <p>Encontros para compartilhamento de experiências e aprendizados.</p>
            </div>
          </div>

          <div className={styles.howToHelp}>
            <h2>Como Você Pode Ajudar</h2>
            <div className={styles.helpGrid}>
              <div className={styles.helpCard}>
                <h3>Doações</h3>
                <p>Contribua com recursos financeiros ou materiais para mantermos nossos projetos.</p>
              </div>
              <div className={styles.helpCard}>
                <h3>Voluntariado</h3>
                <p>Doe seu tempo e talento para nossas atividades e eventos.</p>
              </div>
              <div className={styles.helpCard}>
                <h3>Divulgação</h3>
                <p>Compartilhe nosso trabalho em suas redes sociais.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'team' && (
        <section className={styles.team}>
          <h2>Nossa Equipe</h2>
          
          <div className={styles.teamSection}>
            <h3>Profissionais da Saúde</h3>
            <div className={styles.teamGrid}>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/psychologist.jpg" 
                  alt="Psicóloga"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Dra. Ana Paula</h4>
                <p>Psicóloga Clínica</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/therapist.jpg" 
                  alt="Terapeuta"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Dr. Carlos Eduardo</h4>
                <p>Terapeuta Ocupacional</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/speech-therapist.jpg" 
                  alt="Fonoaudióloga"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Dra. Juliana Mendes</h4>
                <p>Fonoaudióloga</p>
              </div>
            </div>
          </div>

          <div className={styles.teamSection}>
            <h3>Equipe de Desenvolvimento</h3>
            <p>Conheça os profissionais que desenvolveram o FACILITA AMAVI:</p>
            <div className={styles.teamGrid}>
              <div className={styles.memberCard}>
                <Image 
                  src="/img/leticia.jpeg" 
                  alt="Leticia Silva"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Leticia Silva</h4>
                <p>Desenvolvedora Front-end e Designer</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/marcos.jpg" 
                  alt="Marcos Casemiro"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Marcos Casemiro</h4>
                <p>Desenvolvedor Full-stack</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/alini.jpg" 
                  alt="Alini Perroni"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Alini Perroni</h4>
                <p>Desenvolvedora Full-stack</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/team/luana.jpg" 
                  alt="Luana Vitória"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>Luana Vitória</h4>
                <p>Desenvolvedora Full-stack</p>
              </div>
              <div className={styles.memberCard}>
                <Image 
                  src="/img/oliveira.jpeg" 
                  alt="João Oliveira"
                  width={250}
                  height={250}
                  className={styles.memberImage}
                />
                <h4>João Oliveira</h4>
                <p>Desenvolvedor Back-end e Banco de Dados</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2>Entre em Contato</h2>
              
              <div className={styles.infoCard}>
                <h3><FaMapMarkerAlt /> Endereço</h3>
                <p>Rua Sergio Almir Carniel, nº 635, bairro BNH</p>
                <p>Vilhena - RO, 76980-000</p>
              </div>
              
              <div className={styles.infoCard}>
                <h3><FaPhone /> Contatos</h3>
                <p><FaPhone /> Telefone: (69) 99235-1884</p>
                <p><FaWhatsapp /> WhatsApp: (69) 99235-1884</p>
                <p><FaEnvelope /> Email: autismovilhena@gmail.com</p>
              </div>
              
              <div className={styles.infoCard}>
                <h3>Redes Sociais</h3>
                <div className={styles.socialLinks}>
                  <a href="https://www.facebook.com/autismovilhena" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/amavilhena?igsh=MXJ5dmM4d2NvZHlvOQ==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h3>Envie uma Mensagem</h3>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome completo" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="seu@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" placeholder="(69) 99999-9999" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows="5" placeholder="Sua mensagem..."></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
              </form>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.123456789012!2d-60.12345678901234!3d-12.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiUyA2MMKwMDcnMTIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      )}

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>AMAVI</h3>
            <p>Associação de Pais e Amigos dos Autistas de Vilhena</p>
            <p>Transformando vidas desde 2018</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul>
              <li><button onClick={() => setActiveTab('home')}>Início</button></li>
              <li><button onClick={() => setActiveTab('facilita')}>FACILITA AMAVI</button></li>
              <li><button onClick={() => setActiveTab('services')}>Serviços</button></li>
              <li><button onClick={() => setActiveTab('contact')}>Contato</button></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Redes Sociais</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com/amavi" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com/amavi" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com/amavi" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </a>
            </div>
            <p>Siga-nos para acompanhar nosso trabalho</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2025 AMAVI - Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ pela equipe de voluntários</p>
        </div>
      </footer>
    </div>
  );
}
