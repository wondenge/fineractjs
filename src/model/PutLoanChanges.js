

import ApiClient from '../ApiClient';

/**
 * The PutLoanChanges model module.
 * @module model/PutLoanChanges
 * @version 1.0
 */
class PutLoanChanges {
    /**
     * Constructs a new <code>PutLoanChanges</code>.
     * @alias module:model/PutLoanChanges
     */
    constructor() { 
        
        PutLoanChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoanChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoanChanges} obj Optional instance to populate.
     * @return {module:model/PutLoanChanges} The populated <code>PutLoanChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoanChanges();

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
PutLoanChanges.prototype['principal'] = undefined;

/**
 * @member {String} locale
 */
PutLoanChanges.prototype['locale'] = undefined;






export default PutLoanChanges;

