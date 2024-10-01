import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { schema as generatedSqlSchema } from './schema.sql';
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())


const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      date: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

const combinedSchema = a.combine([schema, sqlSchema]);

export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  schema: combinedSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

