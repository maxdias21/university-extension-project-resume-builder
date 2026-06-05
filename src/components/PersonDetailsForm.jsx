import FormField from './FormField';

function PersonDetailsForm({ name, email, phone, address }) {
  return (
    <>
      <FormField
        id="name"
        name="name"
        placeholder="Nome"
        value={name.value}
        handle={name.handle}
      />

      <FormField
        id="email"
        placeholder="Email"
        name="email"
        value={email.value}
        handle={email.handle}
      />

      <FormField
        id="phone"
        name="phone"
        placeholder="Telefone"
        value={phone.value}
        handle={phone.handle}
      />

      <FormField
        id="address"
        name="address"
        placeholder="Endereço"
        value={address.value}
        handle={address.handle}
      />
    </>
  );
}

export default PersonDetailsForm;
