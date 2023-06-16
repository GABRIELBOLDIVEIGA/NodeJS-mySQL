### Criar Modelo da Tabela Pessoas
```
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
```

### Criar Modelo da Tabela de Niveis
```
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
```

### Criar Modelo da Tabela de Turmas
```
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
```

### Criar Modelo da Tabela de Matriculas
```
npx sequelize-cli model:create --name Matriculas --attributes status:string
```

### Cria totas as tabelas do banco
```	
  npx sequelize-cli db:migrate
```

### Cria seed de Pessoas
```
npx sequelize-cli seed:generate --name demo-pessoas
```

### Cria seed de Niveis
```
npx sequelize-cli seed:generate --name demo-niveis
```

### Cria seed de Turmas
```
npx sequelize-cli seed:generate --name demo-turmas
```

### Cria seed de MAtriculas
```
npx sequelize-cli seed:generate --name demo-matriculas
```

### Popula as tabelas
```
npx sequelize-cli db:seed:all
```
