import React, { Component } from 'react';
import { Form, Text, Select } from 'react-form'
import classes from './CreateSuite.css'

const validate = value => {
  return /^[0-9]{3,5}$/.test(value) ? null : 'Input should be a single digit'
}

const roomTypes = [
  {
    label: 'Люкс',
    value: 'люкс',
  },
  {
    label: 'Полулюкс',
    value: 'полулюкс',
  },
]

class CreateSuite extends Component {

  state = {}
  submitHandler = (...args) => {
    console.log(args)
  }
  render() {
    return (
      <Form onSubmit={this.submitHandler} validateOnSubmit>
        {formApi => (
          <form onSubmit={formApi.submitForm} className={classes.Form}>
            <div className={classes.FlexWrapper}>
              <section className={classes.LeftSection}>
                <div className={classes.InputItem}>
                  <label htmlFor="number">Номер: </label>
                  <span>
                    <Text field="number" id="number" validate={validate} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>
                </div>

                <div className={classes.InputItem}>
                  <label htmlFor="rooms">Комнат: </label>
                  <span>
                    <Text field="rooms" id="rooms" validate={validate} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>
                </div>

                <div className={classes.InputItem}>
                  <label htmlFor="roomType">Тип номера:</label>
                  <span>
                    <Select placeholder=' ' selected="Люкс" field="roomType" id="rooType" options={roomTypes} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>
                </div>


              </section>

              <section className={classes.RightSection}>
                <div className={classes.InputItem}>
                  <label htmlFor="lodgers">Мест: </label>
                  <span>
                    <Text field="lodgers" id="lodgers" validate={validate} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>
                </div>

                <div className={classes.InputItem}>
                  <label htmlFor="additionalLodgers">Доп. мест: </label>
                  <span>
                    <Text field="additionalLodgers" id="additionalLodgers" validate={validate} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>

                </div>

                <div className={classes.InputItem}>
                  <label htmlFor="lodgers">Мест: </label>
                  <span>
                    <Text field="lodgers" id="lodgers" validate={validate} />
                    <p className={classes.ErrorMessage}>
                      {formApi.errors && formApi.errors.number}
                    </p>
                  </span>
                </div>
              </section>
            </div>



            <button type="submit">
              Создать номер
            </button>
          </form>
        )}
      </Form>
    )
  }
}

export default CreateSuite;