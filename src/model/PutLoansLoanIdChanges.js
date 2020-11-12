

import ApiClient from '../ApiClient';

/**
 * The PutLoansLoanIdChanges model module.
 * @module model/PutLoansLoanIdChanges
 * @version 1.0
 */
class PutLoansLoanIdChanges {
    /**
     * Constructs a new <code>PutLoansLoanIdChanges</code>.
     * @alias module:model/PutLoansLoanIdChanges
     */
    constructor() { 
        
        PutLoansLoanIdChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoanIdChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoanIdChanges} obj Optional instance to populate.
     * @return {module:model/PutLoansLoanIdChanges} The populated <code>PutLoansLoanIdChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoanIdChanges();

            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} principal
 */
PutLoansLoanIdChanges.prototype['principal'] = undefined;

/**
 * @member {String} locale
 */
PutLoansLoanIdChanges.prototype['locale'] = undefined;






export default PutLoansLoanIdChanges;

