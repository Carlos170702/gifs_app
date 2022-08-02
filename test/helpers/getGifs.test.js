import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGiifs", () => {
  const gif = "gatito";
  
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs(gif);

    //eltoBeGreaterThan sea mayor a 0
    expect( gifs.length ).toBeGreaterThan(0);

    //el expect.any(string)
    expect(gifs[0]).toEqual({
        id: expect.any( String ),
        title: expect.any( String ),
        url: expect.any( String ),
    })
  });

});
