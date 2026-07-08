import FormField from './FormField';

function PersonDetailsForm({
  name,
  email,
  phone,
  address,
  dateOfBirth,
  site,
  linkedin,
}) {
  return (
    <>
      <FormField
        id="name"
        name="name"
        placeholder="Nome"
        placeholderTips="Ex: João da Silva"
        value={name.value}
        handle={name.handle}
        tips="Insira seu nome completo. Evite apelidos ou abreviações."
      />

      <FormField
        id="email"
        placeholder="Email"
        placeholderTips="Ex: joao.silva@email.com"
        name="email"
        value={email.value}
        handle={email.handle}
        tips="Utilize um e-mail com tom profissional, preferencialmente combinando seu nome e sobrenome (ex: nome.sobrenome@email.com)."
      />

      <FormField
        id="phone"
        name="phone"
        placeholder="Telefone"
        placeholderTips="Ex: (11) 98765-4321"
        value={phone.value}
        handle={phone.handle}
        tips="Informe seu número principal com DDD. O formato padrão facilita a leitura: (XX) 9XXXX-XXXX."
      />

      <FormField
        id="address"
        name="address"
        placeholder="Endereço"
        placeholderTips="Ex: São Paulo - SP"
        value={address.value}
        handle={address.handle}
        tips="Por segurança e privacidade, não é necessário colocar a rua ou número. Apenas Cidade e Estado (ex: São Paulo - SP) são suficientes."
      />

      <FormField
        id="dateOfBirth"
        name="dateOfBirth"
        placeholder="Data de Nascimento"
        placeholderTips="Ex: 15/04/1990"
        value={dateOfBirth.value}
        handle={dateOfBirth.handle}
        tips="Opcional. Atualmente, muitos profissionais omitem a data de nascimento e idade para evitar vieses no processo seletivo."
      />

      <FormField
        id="site"
        name="site"
        placeholder="URL do seu site (caso possua)"
        placeholderTips="Ex: github.com/joaosilva"
        value={site.value}
        handle={site.handle}
        tips="Inclua o link para seu portfólio, GitHub, Behance ou site pessoal que demonstre a qualidade do seu trabalho."
      />

      <FormField
        id="linkedin"
        name="linkedin"
        placeholder="URL do seu perfil do Linkedin (caso possua)"
        placeholderTips="Ex: linkedin.com/in/joaosilva"
        value={linkedin.value}
        handle={linkedin.handle}
        tips="Personalize a URL do seu LinkedIn para deixá-la mais limpa no PDF (ex: linkedin.com/in/seunome)."
      />
    </>
  );
}

export default PersonDetailsForm;
