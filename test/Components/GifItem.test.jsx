import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe("prueba en <GifItem />", () => {
  const title = "gatito";
  const url = "https://gatitofeliz.jpg/";

  test("debe aser match en el snapshop", () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen y el ALT indicado", () => {

    render(<GifItem url={url} title={title} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
    
});

test('debe mostrar el titulo en el componente', () => { 

    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();

   })

});
