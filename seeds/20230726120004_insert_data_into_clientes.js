exports.up = function (knex) {
    return knex('clientes').insert([
      { nombre: 'Cliente 1', direccion: 'Dirección del Cliente 1', telefono: '123456789', correo: 'cliente1@correo.com' },
      { nombre: 'Cliente 2', direccion: 'Dirección del Cliente 2', telefono: '987654321', correo: 'cliente2@correo.com' },
      { nombre: 'Cliente 3', direccion: 'Dirección del Cliente 3', telefono: '555555555', correo: 'cliente3@correo.com' },
      { nombre: 'Cliente 4', direccion: 'Dirección del Cliente 4', telefono: '999999999', correo: 'cliente4@correo.com' },
    ]);
  };
  
  exports.down = function (knex) {
    return knex('clientes').del();
  };
  