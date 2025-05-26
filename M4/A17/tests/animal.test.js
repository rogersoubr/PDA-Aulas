import app from "../src/server.js";
import request from "supertest";

//async na function anonima
test("GET dos animais"), async ()=>{
    const res =  await request(app).get("/animal/");//requere a taç rota  
    expect(res.statusCode).toBe(200);
    
}
