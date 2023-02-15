/* Задания на урок:
 
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */






          'use strict';
          document.addEventListener('DOMContentLoaded', () => {
          
          const movieDB = {
              movies: [
                  "Логан",
                  "Лига справедливости",
                  "Ла-ла лэнд",
                  "Одержимость",
                  "Скотт Пилигрим против..."
              ]
          };
          
          const adv = document.querySelectorAll('.promo__adv img'),
                movieList = document.querySelector('.promo__interactive-list');
          
          const deleteAdv = (arr) =>{
              arr.forEach((item) => {
                  item.remove()
              });
          };
          
          const poster = document.querySelector('.promo__bg');  
          const genre = document.querySelector('.promo__genre')  
          const changes = () => {
              genre.textContent = 'драма';
          
              poster.style.backgroundImage = 'url("img/bg.jpg")';
          }
          
          const sortFilms = (arr) => {
               arr.sort()
          }
          
          
          function createMovieList(films, parent) {
              parent.innerHTML = "";
              sortFilms(films);
              
              films.forEach( (film, i) => {
                  parent.innerHTML += `
                      <li class="promo__interactive-item">${i + 1} ${film}
                          <div class="delete"></div>
                      </li>
                  `;
              });
          
          }
          
              document.querySelectorAll('.delete').forEach((btn, i) => {
                  btn.addEventListener('click', () => {
                      btn.parentElement.remove()
                      movieDB.movies.splice(1); 
                      createMovieList(films, parent)
                  })
              })
          
          deleteAdv();
          changes();
          createMovieList(movieDB.movies, movieList)
          
          
          
          
          const input = document.querySelector('.adding__input')
                addForm = document.querySelector('form.add')
                checkbox = addForm.querySelector('[type="checkbox"]');  
                buttonProve = document.querySelector('.prove')
                addForm.addEventListener('submit', (event)=> {
                  event.preventDefault()
          
                  const newFilm = input.value;
                        favourite = checkbox.checked;
           
                  if (newFilm) {
                      
                      if (newFilm.length > 21) {
                          newFilm = `${newFilm.substring(0, 22)}...`
                      }
          
                      if (favourite) {
                          console.log("Добавляем любимый фильм")
                      }
                      movieDB.movies.push(newFilm);
                      sortFilms(movieDB.movies);     
                      createMovieList(movieDB.movies, movieList)
          
                  } 
          
          
                  event.target.reset() 
          
          
                        
                })
          
          });

































 










