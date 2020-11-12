

import ApiClient from '../ApiClient';
import FloatingRate from './FloatingRate';
import LoanProduct from './LoanProduct';

/**
 * The LoanProductFloatingRates model module.
 * @module model/LoanProductFloatingRates
 * @version 1.0
 */
class LoanProductFloatingRates {
    /**
     * Constructs a new <code>LoanProductFloatingRates</code>.
     * @alias module:model/LoanProductFloatingRates
     */
    constructor() { 
        
        LoanProductFloatingRates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductFloatingRates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductFloatingRates} obj Optional instance to populate.
     * @return {module:model/LoanProductFloatingRates} The populated <code>LoanProductFloatingRates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductFloatingRates();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('loanProduct')) {
                obj['loanProduct'] = LoanProduct.constructFromObject(data['loanProduct']);
            }
            if (data.hasOwnProperty('floatingRate')) {
                obj['floatingRate'] = FloatingRate.constructFromObject(data['floatingRate']);
            }
            if (data.hasOwnProperty('interestRateDifferential')) {
                obj['interestRateDifferential'] = ApiClient.convertToType(data['interestRateDifferential'], 'Number');
            }
            if (data.hasOwnProperty('minDifferentialLendingRate')) {
                obj['minDifferentialLendingRate'] = ApiClient.convertToType(data['minDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('defaultDifferentialLendingRate')) {
                obj['defaultDifferentialLendingRate'] = ApiClient.convertToType(data['defaultDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('maxDifferentialLendingRate')) {
                obj['maxDifferentialLendingRate'] = ApiClient.convertToType(data['maxDifferentialLendingRate'], 'Number');
            }
            if (data.hasOwnProperty('floatingInterestRateCalculationAllowed')) {
                obj['floatingInterestRateCalculationAllowed'] = ApiClient.convertToType(data['floatingInterestRateCalculationAllowed'], 'Boolean');
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
LoanProductFloatingRates.prototype['id'] = undefined;

/**
 * @member {module:model/LoanProduct} loanProduct
 */
LoanProductFloatingRates.prototype['loanProduct'] = undefined;

/**
 * @member {module:model/FloatingRate} floatingRate
 */
LoanProductFloatingRates.prototype['floatingRate'] = undefined;

/**
 * @member {Number} interestRateDifferential
 */
LoanProductFloatingRates.prototype['interestRateDifferential'] = undefined;

/**
 * @member {Number} minDifferentialLendingRate
 */
LoanProductFloatingRates.prototype['minDifferentialLendingRate'] = undefined;

/**
 * @member {Number} defaultDifferentialLendingRate
 */
LoanProductFloatingRates.prototype['defaultDifferentialLendingRate'] = undefined;

/**
 * @member {Number} maxDifferentialLendingRate
 */
LoanProductFloatingRates.prototype['maxDifferentialLendingRate'] = undefined;

/**
 * @member {Boolean} floatingInterestRateCalculationAllowed
 */
LoanProductFloatingRates.prototype['floatingInterestRateCalculationAllowed'] = undefined;

/**
 * @member {Boolean} new
 */
LoanProductFloatingRates.prototype['new'] = undefined;






export default LoanProductFloatingRates;

