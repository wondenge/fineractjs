

import ApiClient from '../ApiClient';

/**
 * The LoanTransactionProcessingStrategy model module.
 * @module model/LoanTransactionProcessingStrategy
 * @version 1.0
 */
class LoanTransactionProcessingStrategy {
    /**
     * Constructs a new <code>LoanTransactionProcessingStrategy</code>.
     * @alias module:model/LoanTransactionProcessingStrategy
     */
    constructor() { 
        
        LoanTransactionProcessingStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanTransactionProcessingStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanTransactionProcessingStrategy} obj Optional instance to populate.
     * @return {module:model/LoanTransactionProcessingStrategy} The populated <code>LoanTransactionProcessingStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanTransactionProcessingStrategy();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('standardStrategy')) {
                obj['standardStrategy'] = ApiClient.convertToType(data['standardStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('heavensfamilyStrategy')) {
                obj['heavensfamilyStrategy'] = ApiClient.convertToType(data['heavensfamilyStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('earlyPaymentStrategy')) {
                obj['earlyPaymentStrategy'] = ApiClient.convertToType(data['earlyPaymentStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('creocoreStrategy')) {
                obj['creocoreStrategy'] = ApiClient.convertToType(data['creocoreStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('indianRBIStrategy')) {
                obj['indianRBIStrategy'] = ApiClient.convertToType(data['indianRBIStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('principalInterestPenaltiesFeesOrderStrategy')) {
                obj['principalInterestPenaltiesFeesOrderStrategy'] = ApiClient.convertToType(data['principalInterestPenaltiesFeesOrderStrategy'], 'Boolean');
            }
            if (data.hasOwnProperty('interestPrincipalPenaltiesFeesOrderStrategy')) {
                obj['interestPrincipalPenaltiesFeesOrderStrategy'] = ApiClient.convertToType(data['interestPrincipalPenaltiesFeesOrderStrategy'], 'Boolean');
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
LoanTransactionProcessingStrategy.prototype['id'] = undefined;

/**
 * @member {Boolean} standardStrategy
 */
LoanTransactionProcessingStrategy.prototype['standardStrategy'] = undefined;

/**
 * @member {Boolean} heavensfamilyStrategy
 */
LoanTransactionProcessingStrategy.prototype['heavensfamilyStrategy'] = undefined;

/**
 * @member {Boolean} earlyPaymentStrategy
 */
LoanTransactionProcessingStrategy.prototype['earlyPaymentStrategy'] = undefined;

/**
 * @member {Boolean} creocoreStrategy
 */
LoanTransactionProcessingStrategy.prototype['creocoreStrategy'] = undefined;

/**
 * @member {Boolean} indianRBIStrategy
 */
LoanTransactionProcessingStrategy.prototype['indianRBIStrategy'] = undefined;

/**
 * @member {Boolean} principalInterestPenaltiesFeesOrderStrategy
 */
LoanTransactionProcessingStrategy.prototype['principalInterestPenaltiesFeesOrderStrategy'] = undefined;

/**
 * @member {Boolean} interestPrincipalPenaltiesFeesOrderStrategy
 */
LoanTransactionProcessingStrategy.prototype['interestPrincipalPenaltiesFeesOrderStrategy'] = undefined;

/**
 * @member {Boolean} new
 */
LoanTransactionProcessingStrategy.prototype['new'] = undefined;






export default LoanTransactionProcessingStrategy;

