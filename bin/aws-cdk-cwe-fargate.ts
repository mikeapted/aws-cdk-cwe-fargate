#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkCweFargateStack } from '../lib/aws-cdk-cwe-fargate-stack';

const app = new cdk.App();
new AwsCdkCweFargateStack(app, 'AwsCdkCweFargateStack');
