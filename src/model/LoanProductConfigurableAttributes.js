

import ApiClient from '../ApiClient';
import LoanProduct from './LoanProduct';

/**
 * The LoanProductConfigurableAttributes model module.
 * @module model/LoanProductConfigurableAttributes
 * @version 1.0
 */
class LoanProductConfigurableAttributes {
    /**
     * Constructs a new <code>LoanProductConfigurableAttributes</code>.
     * @alias module:model/LoanProductConfigurableAttributes
     */
    constructor() { 
        
        LoanProductConfigurableAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductConfigurableAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductConfigurableAttributes} obj Optional instance to populate.
     * @return {module:model/LoanProductConfigurableAttributes} The populated <code>LoanProductConfigurableAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductConfigurableAttributes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('loanProduct')) {
                obj['loanProduct'] = LoanProduct.constructFromObject(data['loanProduct']);
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = ApiClient.convertToType(data['amortizationType'], 'Boolean');
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = ApiClient.convertToType(data['interestType'], 'Boolean');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyId')) {
                obj['transactionProcessingStrategyId'] = ApiClient.convertToType(data['transactionProcessingStrategyId'], 'Boolean');
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = ApiClient.convertToType(data['interestCalculationPeriodType'], 'Boolean');
            }
            if (data.hasOwnProperty('inArrearsTolerance')) {
                obj['inArrearsTolerance'] = ApiClient.convertToType(data['inArrearsTolerance'], 'Boolean');
            }
            if (data.hasOwnProperty('repaymentEvery')) {
                obj['repaymentEvery'] = ApiClient.convertToType(data['repaymentEvery'], 'Boolean');
            }
            if (data.hasOwnProperty('graceOnPrincipalAndInterestPayment')) {
                obj['graceOnPrincipalAndInterestPayment'] = ApiClient.convertToType(data['graceOnPrincipalAndInterestPayment'], 'Boolean');
            }
            if (data.hasOwnProperty('graceOnArrearsAgeing')) {
                obj['graceOnArrearsAgeing'] = ApiClient.convertToType(data['graceOnArrearsAgeing'], 'Boolean');
            }
            if (data.hasOwnProperty('amortizationBoolean')) {
                obj['amortizationBoolean'] = ApiClient.convertToType(data['amortizationBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('interestMethodBoolean')) {
                obj['interestMethodBoolean'] = ApiClient.convertToType(data['interestMethodBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('transactionProcessingStrategyBoolean')) {
                obj['transactionProcessingStrategyBoolean'] = ApiClient.convertToType(data['transactionProcessingStrategyBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('interestCalcPeriodBoolean')) {
                obj['interestCalcPeriodBoolean'] = ApiClient.convertToType(data['interestCalcPeriodBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('arrearsToleranceBoolean')) {
                obj['arrearsToleranceBoolean'] = ApiClient.convertToType(data['arrearsToleranceBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('repaymentEveryBoolean')) {
                obj['repaymentEveryBoolean'] = ApiClient.convertToType(data['repaymentEveryBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('graceOnPrincipalAndInterestPaymentBoolean')) {
                obj['graceOnPrincipalAndInterestPaymentBoolean'] = ApiClient.convertToType(data['graceOnPrincipalAndInterestPaymentBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('graceOnArrearsAgingBoolean')) {
                obj['graceOnArrearsAgingBoolean'] = ApiClient.convertToType(data['graceOnArrearsAgingBoolean'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
LoanProductConfigurableAttributes.prototype['id'] = undefined;

/**
 * @member {module:model/LoanProduct} loanProduct
 */
LoanProductConfigurableAttributes.prototype['loanProduct'] = undefined;

/**
 * @member {Boolean} amortizationType
 */
LoanProductConfigurableAttributes.prototype['amortizationType'] = undefined;

/**
 * @member {Boolean} interestType
 */
LoanProductConfigurableAttributes.prototype['interestType'] = undefined;

/**
 * @member {Boolean} transactionProcessingStrategyId
 */
LoanProductConfigurableAttributes.prototype['transactionProcessingStrategyId'] = undefined;

/**
 * @member {Boolean} interestCalculationPeriodType
 */
LoanProductConfigurableAttributes.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Boolean} inArrearsTolerance
 */
LoanProductConfigurableAttributes.prototype['inArrearsTolerance'] = undefined;

/**
 * @member {Boolean} repaymentEvery
 */
LoanProductConfigurableAttributes.prototype['repaymentEvery'] = undefined;

/**
 * @member {Boolean} graceOnPrincipalAndInterestPayment
 */
LoanProductConfigurableAttributes.prototype['graceOnPrincipalAndInterestPayment'] = undefined;

/**
 * @member {Boolean} graceOnArrearsAgeing
 */
LoanProductConfigurableAttributes.prototype['graceOnArrearsAgeing'] = undefined;

/**
 * @member {Boolean} amortizationBoolean
 */
LoanProductConfigurableAttributes.prototype['amortizationBoolean'] = undefined;

/**
 * @member {Boolean} interestMethodBoolean
 */
LoanProductConfigurableAttributes.prototype['interestMethodBoolean'] = undefined;

/**
 * @member {Boolean} transactionProcessingStrategyBoolean
 */
LoanProductConfigurableAttributes.prototype['transactionProcessingStrategyBoolean'] = undefined;

/**
 * @member {Boolean} interestCalcPeriodBoolean
 */
LoanProductConfigurableAttributes.prototype['interestCalcPeriodBoolean'] = undefined;

/**
 * @member {Boolean} arrearsToleranceBoolean
 */
LoanProductConfigurableAttributes.prototype['arrearsToleranceBoolean'] = undefined;

/**
 * @member {Boolean} repaymentEveryBoolean
 */
LoanProductConfigurableAttributes.prototype['repaymentEveryBoolean'] = undefined;

/**
 * @member {Boolean} graceOnPrincipalAndInterestPaymentBoolean
 */
LoanProductConfigurableAttributes.prototype['graceOnPrincipalAndInterestPaymentBoolean'] = undefined;

/**
 * @member {Boolean} graceOnArrearsAgingBoolean
 */
LoanProductConfigurableAttributes.prototype['graceOnArrearsAgingBoolean'] = undefined;

/**
 * @member {Boolean} new
 */
LoanProductConfigurableAttributes.prototype['new'] = undefined;






export default LoanProductConfigurableAttributes;

