describe('Address Book', function() {
  var addressBook, thisContact;

  beforeEach(function () {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });
//Teste de estar apto a adicionar um contato
  it('esta apto a adicionar um contato', function() {
    //add contato
    addressBook.addContact(thisContact);

    //testando contato
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
  //Teste para deletar um contato da agenda
  it('esta apto a deletar um contato da agenda', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

//Criando nova suíte de Teste
describe('Async Address Book', function() {
  it('pegará novos contatos', function() {
    var addressBook = new AddressBook();
    //Função assíncrona
    addressBook.getInitialContacts();
    expect(addressBook.initialComplete).toBe(true)
  });
});
