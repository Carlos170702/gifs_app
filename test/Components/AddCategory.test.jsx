const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/Components/AddCategory")

describe('pruebas en AddCategory', () => {
    const nameGif= "saitama";
    
    test('debe de cambiar el valor de la caja de texto', () => {

        render(< AddCategory onAddCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: nameGif}});
        
        expect(input.value).toBe(nameGif);
        
    })
    
    test('debe llamr onNewCategory si el input tiene valor', () => { 
        //es una simulacion de la funcion que es verdad se quiere implementar
        const onNewCategory = jest.fn();

        render(< AddCategory onAddCategory={onNewCategory} />)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target:{value: nameGif}});
        fireEvent.submit( form );
        
        expect( input.value).toBe('');
        //sirve para ver si la funcion fue llamada.
        expect(onNewCategory).toHaveBeenCalled();
        //sirve para ver si la funcion fue llamada 1 vez y se lepuede poner las llamadas que uno quiera.
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //sirve pora ver si la funcion fue llamada con el nombre de "saitama" 
        expect(onNewCategory).toHaveBeenCalledWith(nameGif);
    })
    
    test('no debe de llamr onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();

        render(< AddCategory onAddCategory={onNewCategory} />)
        const form = screen.getByRole('form');
        
        fireEvent.submit( form );

        expect(onNewCategory).toBeCalledTimes(0)
      })

})
