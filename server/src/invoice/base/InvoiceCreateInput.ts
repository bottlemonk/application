/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsInt, IsEnum } from "class-validator";
import { EnumInvoiceSite } from "./EnumInvoiceSite";

@InputType()
class InvoiceCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  food?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mileage?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumInvoiceSite,
    isArray: true,
  })
  @IsEnum(EnumInvoiceSite, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumInvoiceSite], {
    nullable: true,
  })
  site?: Array<"Site_1" | "Site_2" | "Site_3">;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  stopout?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  van?: boolean | null;
}

export { InvoiceCreateInput as InvoiceCreateInput };
