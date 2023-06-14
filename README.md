### Criar Modelo da Tabela Pessoas
```json
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

### Criar Modelo da Tabela de Niveis
```json
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
```

### Criar Modelo da Tabela de Turmas
```json
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
```

### Criar Modelo da Tabela de Matriculas
```json
npx sequelize-cli model:create --name Matriculas --attributes status:string
```

### Cria totas as tabelas do banco
```json	
  npx sequelize-cli db:migrate
```

### Cria seed de Pessoas
```json
npx sequelize-cli seed:generate --name demo-pessoas
```

### Cria seed de Niveis
```json
npx sequelize-cli seed:generate --name demo-niveis
```

### Cria seed de Turmas
```json
npx sequelize-cli seed:generate --name demo-turmas
```

### Cria seed de MAtriculas
```json
npx sequelize-cli seed:generate --name demo-matriculas
```

### Popula as tabelas
```json
npx sequelize-cli db:seed:all
```
