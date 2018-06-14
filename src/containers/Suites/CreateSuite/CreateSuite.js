import React, { Component } from 'react';

import classes from './CreateSuite.css'

class CreateSuite extends Component {
  state = {}
  render() {
    return (
      <section className={classes.CreateSuite}>
        <form>
          <div>
            <label htmlFor="number">Номер:</label>
            <input id='number' name='number' type="number" />
          </div>
          <div>
            <label htmlFor="rooms">Комнат:</label>
            <input id='rooms' name='rooms' type="number" />
          </div>
          <div>
            <label htmlFor="lodgers">Мест:</label>
            <input id='lodgers' name='lodgers' type="number" />
          </div>
          <div>
            <label htmlFor="additionalLodgers">Дополнительных мест:</label>
            <input id='additionalLodgers' name='additionalLodgers' type="number" />
          </div>
          <div>
            <label htmlFor="roomType">Тип номера:</label>
            <select id='roomType' name='roomType'>
              <option value="люкс">Люкс</option>
              <option value="полулюкс">Полулюкс</option>
            </select>
          </div>
          <div>
            <label htmlFor="features">Удобства:</label>
            <input id='features' name='features' type="text" />
          </div>
          <div>
            <label htmlFor="mainImage">Главное фото:</label>
            <input id='mainImage' name='mainImage' type="text" />
          </div>
          <div>
            <button>Добавить ценовой период</button>
          </div>
          <button>Создать новый номер</button>
        </form>
      </section>
    )
  }
}

export default CreateSuite;