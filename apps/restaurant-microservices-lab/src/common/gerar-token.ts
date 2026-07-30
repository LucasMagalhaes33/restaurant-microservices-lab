import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService({ secret: 'segredo-compartilhado-troque-em-producao' });
const token = jwtService.sign({ servico: 'restaurant-microservices-lab' }, { expiresIn: '5m' });
console.log(token);