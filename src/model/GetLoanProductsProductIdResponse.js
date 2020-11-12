

import ApiClient from '../ApiClient';
import GetLoanAccountingMappings from './GetLoanAccountingMappings';
import GetLoanFeeToIncomeAccountMappings from './GetLoanFeeToIncomeAccountMappings';
import GetLoanPaymentChannelToFundSourceMappings from './GetLoanPaymentChannelToFundSourceMappings';
import GetLoanProductsAccountingRule from './GetLoanProductsAccountingRule';
import GetLoanProductsAmortizationType from './GetLoanProductsAmortizationType';
import GetLoanProductsCurrency from './GetLoanProductsCurrency';
import GetLoanProductsInterestRateFrequencyType from './GetLoanProductsInterestRateFrequencyType';
import GetLoanProductsInterestTemplateType from './GetLoanProductsInterestTemplateType';
import GetLoanProductsPrincipalVariationsForBorrowerCycle from './GetLoanProductsPrincipalVariationsForBorrowerCycle';
import GetLoanProductsRepaymentFrequencyType from './GetLoanProductsRepaymentFrequencyType';
import GetLoansProductsInterestCalculationPeriodType from './GetLoansProductsInterestCalculationPeriodType';

/**
 * The GetLoanProductsProductIdResponse model module.
 * @module model/GetLoanProductsProductIdResponse
 * @version 1.0
 */
class GetLoanProductsProductIdResponse {
    /**
     * Constructs a new <code>GetLoanProductsProductIdResponse</code>.
     * GetLoanProductsProductIdResponse
     * @alias module:model/GetLoanProductsProductIdResponse
     */
    constructor() { 
        
        GetLoanProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsProductIdResponse} The populated <code>GetLoanProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsProductIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('includeInBorrowerCycle')) {
                obj['includeInBorrowerCycle'] = ApiClient.convertToType(data['includeInBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('useBorrowerCycle')) {
                obj['useBorrowerCycle'] = ApiClient.convertToType(data['useBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanProductsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('minPrincipal')) {
                obj['minPrincipal'] = ApiClient.convertToType(data['minPrincipal'], 'Number');
            }
            if (data.hasOwnProperty('maxPrincipal')) {
                obj['maxPrincipal'] = ApiClient.convertToType(data['maxPrincipal'], 'Number');
            }
            if (data.hasOwnProperty('numberOfRepayments')) {
                obj['numberOfRepayments'] = ApiClient.convertToType(data['numberOfRepayments'], 'Number');
            }
            if (data.hasOwnProperty('repaymentEvery')) {
                obj['repaymentEvery'] = ApiClient.convertToType(data['repaymentEvery'], 'Number');
            }
            if (data.hasOwnProperty('repaymentFrequencyType')) {
                obj['repaymentFrequencyType'] = GetLoanProductsRepaymentFrequencyType.constructFromObject(data['repaymentFrequencyType']);
            }
            if (data.hasOwnProperty('interestRatePerPeriod')) {
                obj['interestRatePerPeriod'] = ApiClient.convertToType(data['interestRatePerPeriod'], 'Number');
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = GetLoanProductsInterestRateFrequencyType.constructFromObject(data['interestRateFrequencyType']);
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = GetLoanProductsAmortizationType.constructFromObject(data['amortizationType']);
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = GetLoanProductsInterestTemplateType.constructFromObject(data['interestType']);
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = GetLoansProductsInterestCalculationPeriodType.constructFromObject(data['interestCalculationPeriodType']);
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Number');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyName')) {
                obj['transactionProcessingStrategyName'] = ApiClient.convertToType(data['transactionProcessingStrategyName'], 'String');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], ['Number']);
            }
            if (data.hasOwnProperty('productsPrincipalVariationsForBorrowerCycle')) {
                obj['productsPrincipalVariationsForBorrowerCycle'] = ApiClient.convertToType(data['productsPrincipalVariationsForBorrowerCycle'], [GetLoanProductsPrincipalVariationsForBorrowerCycle]);
            }
            if (data.hasOwnProperty('interestRateVariationsForBorrowerCycle')) {
                obj['interestRateVariationsForBorrowerCycle'] = ApiClient.convertToType(data['interestRateVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('numberOfRepaymentVariationsForBorrowerCycle')) {
                obj['numberOfRepaymentVariationsForBorrowerCycle'] = ApiClient.convertToType(data['numberOfRepaymentVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetLoanProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetLoanAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('paymentChannelToFundSourceMappings')) {
                obj['paymentChannelToFundSourceMappings'] = ApiClient.convertToType(data['paymentChannelToFundSourceMappings'], [GetLoanPaymentChannelToFundSourceMappings]);
            }
            if (data.hasOwnProperty('feeToIncomeAccountMappings')) {
                obj['feeToIncomeAccountMappings'] = ApiClient.convertToType(data['feeToIncomeAccountMappings'], [GetLoanFeeToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('multiDisburseLoan')) {
                obj['multiDisburseLoan'] = ApiClient.convertToType(data['multiDisburseLoan'], 'Boolean');
            }
            if (data.hasOwnProperty('maxTrancheCount')) {
                obj['maxTrancheCount'] = ApiClient.convertToType(data['maxTrancheCount'], 'Number');
            }
            if (data.hasOwnProperty('outstandingLoanBalance')) {
                obj['outstandingLoanBalance'] = ApiClient.convertToType(data['outstandingLoanBalance'], 'Number');
            }
            if (data.hasOwnProperty('overdueDaysForNPA')) {
                obj['overdueDaysForNPA'] = ApiClient.convertToType(data['overdueDaysForNPA'], 'Number');
            }
            if (data.hasOwnProperty('principalThresholdForLastInstalment')) {
                obj['principalThresholdForLastInstalment'] = ApiClient.convertToType(data['principalThresholdForLastInstalment'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsProductIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsProductIdResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetLoanProductsProductIdResponse.prototype['shortName'] = undefined;

/**
 * @member {Boolean} includeInBorrowerCycle
 */
GetLoanProductsProductIdResponse.prototype['includeInBorrowerCycle'] = undefined;

/**
 * @member {Boolean} useBorrowerCycle
 */
GetLoanProductsProductIdResponse.prototype['useBorrowerCycle'] = undefined;

/**
 * @member {String} status
 */
GetLoanProductsProductIdResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetLoanProductsCurrency} currency
 */
GetLoanProductsProductIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} principal
 */
GetLoanProductsProductIdResponse.prototype['principal'] = undefined;

/**
 * @member {Number} minPrincipal
 */
GetLoanProductsProductIdResponse.prototype['minPrincipal'] = undefined;

/**
 * @member {Number} maxPrincipal
 */
GetLoanProductsProductIdResponse.prototype['maxPrincipal'] = undefined;

/**
 * @member {Number} numberOfRepayments
 */
GetLoanProductsProductIdResponse.prototype['numberOfRepayments'] = undefined;

/**
 * @member {Number} repaymentEvery
 */
GetLoanProductsProductIdResponse.prototype['repaymentEvery'] = undefined;

/**
 * @member {module:model/GetLoanProductsRepaymentFrequencyType} repaymentFrequencyType
 */
GetLoanProductsProductIdResponse.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {Number} interestRatePerPeriod
 */
GetLoanProductsProductIdResponse.prototype['interestRatePerPeriod'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRateFrequencyType} interestRateFrequencyType
 */
GetLoanProductsProductIdResponse.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetLoanProductsProductIdResponse.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetLoanProductsAmortizationType} amortizationType
 */
GetLoanProductsProductIdResponse.prototype['amortizationType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestTemplateType} interestType
 */
GetLoanProductsProductIdResponse.prototype['interestType'] = undefined;

/**
 * @member {module:model/GetLoansProductsInterestCalculationPeriodType} interestCalculationPeriodType
 */
GetLoanProductsProductIdResponse.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Number} transactionProcessingStrategyId
 */
GetLoanProductsProductIdResponse.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {String} transactionProcessingStrategyName
 */
GetLoanProductsProductIdResponse.prototype['transactionProcessingStrategyName'] = undefined;

/**
 * @member {Array.<Number>} charges
 */
GetLoanProductsProductIdResponse.prototype['charges'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsPrincipalVariationsForBorrowerCycle>} productsPrincipalVariationsForBorrowerCycle
 */
GetLoanProductsProductIdResponse.prototype['productsPrincipalVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} interestRateVariationsForBorrowerCycle
 */
GetLoanProductsProductIdResponse.prototype['interestRateVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} numberOfRepaymentVariationsForBorrowerCycle
 */
GetLoanProductsProductIdResponse.prototype['numberOfRepaymentVariationsForBorrowerCycle'] = undefined;

/**
 * @member {module:model/GetLoanProductsAccountingRule} accountingRule
 */
GetLoanProductsProductIdResponse.prototype['accountingRule'] = undefined;

/**
 * @member {module:model/GetLoanAccountingMappings} accountingMappings
 */
GetLoanProductsProductIdResponse.prototype['accountingMappings'] = undefined;

/**
 * @member {Array.<module:model/GetLoanPaymentChannelToFundSourceMappings>} paymentChannelToFundSourceMappings
 */
GetLoanProductsProductIdResponse.prototype['paymentChannelToFundSourceMappings'] = undefined;

/**
 * @member {Array.<module:model/GetLoanFeeToIncomeAccountMappings>} feeToIncomeAccountMappings
 */
GetLoanProductsProductIdResponse.prototype['feeToIncomeAccountMappings'] = undefined;

/**
 * @member {Boolean} multiDisburseLoan
 */
GetLoanProductsProductIdResponse.prototype['multiDisburseLoan'] = undefined;

/**
 * @member {Number} maxTrancheCount
 */
GetLoanProductsProductIdResponse.prototype['maxTrancheCount'] = undefined;

/**
 * @member {Number} outstandingLoanBalance
 */
GetLoanProductsProductIdResponse.prototype['outstandingLoanBalance'] = undefined;

/**
 * @member {Number} overdueDaysForNPA
 */
GetLoanProductsProductIdResponse.prototype['overdueDaysForNPA'] = undefined;

/**
 * @member {Number} principalThresholdForLastInstalment
 */
GetLoanProductsProductIdResponse.prototype['principalThresholdForLastInstalment'] = undefined;






export default GetLoanProductsProductIdResponse;

