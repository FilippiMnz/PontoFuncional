    function Livro(titulo, autor, ano, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }
    
  const catalogoPrincipal = [
    {titulo:"IT: A coisa", autor:"Stephen King", ano:"1986",genero:"Terror"},
    {titulo:"Harry Potter e a Pedra Filosofal ", autor:"J.K. Rowlig", ano:"1997",genero:"Literatura Fantastica"},
    {titulo:"EM FOGO LENTO", autor:"Paula Hawkins", ano:"2021",genero:"Misterio"},
    {titulo:"Berserk", autor:"Miura Kentaro", ano:"1989",genero:"Literatura Fantastica"},
    {titulo:"20TH CENTURY BOYS", autor:"Naoki Urasawa", ano:"1999",genero:"Misterio"},
    {titulo:"Frankenstein", autor:"Mary Shelley", ano:"1818",genero:"Terror"}
];

function listarLIVROS() {
    catalogoPrincipal.forEach(livro => {
      console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}, Gênero: ${livro.genero}`);
    });
  }


  function adicionarLivro(titulo, autor, ano, genero) {
    const novoLivro = new Livro(titulo, autor, ano, genero);
    catalogoPrincipal.push(novoLivro);
  }

    //Demo Adicao Livros
 adicionarLivro('Full Metal Alchemist', 'Hiromu Arakawa', '2001', 'Literatura Fantastica');
 adicionarLivro('O Chamado de Cthulhu', 'H.P. Lovecraft', '1928', 'Terror');





  
  function buscarPorGenero(genero) {
    return catalogoPrincipal.filter(livro => livro.genero === genero);
  }
  
  function removerLivro(titulo) {
    const livroIndex = catalogoPrincipal.findIndex(livro => livro.titulo === titulo);
    if (livroIndex !== -1) {
      catalogoPrincipal.splice(livroIndex, 1);
    }
  }
  

 
  
  listarLIVROS();
  
  const livrosDeTerror = buscarPorGenero('Terror');
  console.log('Livros de Terror:', livrosDeTerror);
  
  removerLivro('Berserk');
  
  console.log('Catálogo Depois Da remoção:');
  listarLIVROS();
  
