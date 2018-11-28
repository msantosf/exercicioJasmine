describe('Address Book', function() {
//Teste de estar apto a adicionar um contato
  it('esta apto a adicionar um contato', function() {
    //criando instancia de Address AddressBook
    var addressBook = new AddressBook();
    //criando instancia de Contact
    var thisContact = new Contact();

    //add contato
    addressBook.addContact(thisContact);

    //testando contato
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
  //Teste para deletar um contato da agenda
  it('esta apto a deletar um contato da agenda', function() {
    var addressBook = new AddressBook(),
        thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
