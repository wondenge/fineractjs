

import ApiClient from '../ApiClient';

/**
 * The PutSavingsChanges model module.
 * @module model/PutSavingsChanges
 * @version 1.0
 */
class PutSavingsChanges {
    /**
     * Constructs a new <code>PutSavingsChanges</code>.
     * @alias module:model/PutSavingsChanges
     */
    constructor() { 
        
        PutSavingsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsChanges} obj Optional instance to populate.
     * @return {module:model/PutSavingsChanges} The populated <code>PutSavingsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsChanges();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = ApiClient.convertToType(data['interestRate'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutSavingsChanges.prototype['description'] = undefined;

/**
 * @member {Number} interestRate
 */
PutSavingsChanges.prototype['interestRate'] = undefined;

/**
 * @member {String} locale
 */
PutSavingsChanges.prototype['locale'] = undefined;






export default PutSavingsChanges;

