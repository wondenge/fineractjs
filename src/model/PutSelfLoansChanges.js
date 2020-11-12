

import ApiClient from '../ApiClient';

/**
 * The PutSelfLoansChanges model module.
 * @module model/PutSelfLoansChanges
 * @version 1.0
 */
class PutSelfLoansChanges {
    /**
     * Constructs a new <code>PutSelfLoansChanges</code>.
     * @alias module:model/PutSelfLoansChanges
     */
    constructor() { 
        
        PutSelfLoansChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfLoansChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfLoansChanges} obj Optional instance to populate.
     * @return {module:model/PutSelfLoansChanges} The populated <code>PutSelfLoansChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfLoansChanges();

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
PutSelfLoansChanges.prototype['principal'] = undefined;

/**
 * @member {String} locale
 */
PutSelfLoansChanges.prototype['locale'] = undefined;






export default PutSelfLoansChanges;

