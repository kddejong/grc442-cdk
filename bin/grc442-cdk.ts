#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Grc442CdkStack } from '../lib/grc442-cdk-stack';
import { MyCompanyChecker } from '../lib/aspects';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';

const app = new cdk.App();

cdk.Aspects.of(app).add(new MyCompanyChecker());

cdk.Aspects.of(app).add(new AwsSolutionsChecks());

const stack = new Grc442CdkStack(app, 'Grc442CdkStack', {});

NagSuppressions.addStackSuppressions(
    stack,
    [
        {
            id: "AwsSolutions-S1",
            reason: "For demo purposes",
        }
    ]
)