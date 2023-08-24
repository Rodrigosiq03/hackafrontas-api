import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const userCreated = await this.productsService.create(createProductDto);
    return { 
      message: 'Product added to the E-commerce Dev Community!', 
      name: 'Ta daora em lkkkkk, maneirao' + userCreated.name,
      price: 'o preço ta meio caro em k ' + userCreated.price,
      local: 'o local era pra ser a casa do teu pai, mas ta aí ' + userCreated.local,
      description: 'a descrição nem era pra ter mas blz, ela é ' + userCreated.description
    }
  }

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();


    return {
      message: 'Products from E-commerce Dev Community retrieved!',
      id: products.map(product => product.id),
      name: products.map(product => product.name),
      type: products.map(product => product.type),
      price: products.map(product => product.price),
      local: products.map(product => product.local),
      description: products.map(product => product.description)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);

    return {
      message: 'Product from E-commerce Dev Community retrieved!',
      name: 'NomeDoProduto a seguir->:()' + product.name,
      type: 'Tipo especifico do produto em especifico0->?' + product.type,
      price: 'Preço do produto bem formatado1242$={}' + product.price,
      local: 'O local que vc pode encontrar esse produto é o seguinte [->] [<-]' + product.local,
      description: 'Descrição do produto que vc selecionouwfilnbuABU' + product.description
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.update(id, updateProductDto);


    return {
      message: 'Product from E-commerce Dev Community updated!',
      name: 'NomeDoProduto a seguir->:wdaw' + product.name,
      type: 'Tipo especifico do produto em especifico0->?=-1@' + product.type,
      price: 'Preço do produto bem formatado1242$={}' + product.price,
      local: 'O local que vc pode encontrar esse produto é o seguinte [->] [<-]' + product.local,
      description: 'Descrição do produto que vc selecionouwfilnbuABU' + product.description
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productsService.remove(id);

    return {
      message: 'Product from E-commerce Dev Community deleted!',
    }
  }
}
