import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDuDgCHH3MHVvTe5P060PQ",
        engine: "mysql",
        connectionUri: secret("MYSQL_CONNECTION_STRING"),
        vpcConfig: {
            vpcId: "vpc-096c8fd92d72caeea",
            securityGroupIds: [
                "sg-072b83547757b58c4"
            ],
            subnetAvailabilityZones: [
                {
                    subnetId: "subnet-00c93176ace60cda1",
                    availabilityZone: "us-east-2c"
                },
                {
                    subnetId: "subnet-037a00d1125dcdb8c",
                    availabilityZone: "us-east-2b"
                },
                {
                    subnetId: "subnet-06fcf37656c02b5ff",
                    availabilityZone: "us-east-2a"
                }
            ]
        }
    }
}).schema({
    "User": a.model({
        id: a.integer().required(),
        name: a.string(),
        gender: a.enum([
            "MALE",
            "FEMALE",
            "NA"
        ]),
        age: a.enum([
            "Above18",
            "Below18"
        ])
    }).identifier([
        "id"
    ]),
    "User1": a.model({
        id: a.integer().required(),
        name: a.string(),
        gender: a.enum([
            "MALE",
            "FEMALE",
            "NA"
        ]),
        age: a.enum([
            "Above18",
            "Below18"
        ])
    }).identifier([
        "id"
    ])
});
