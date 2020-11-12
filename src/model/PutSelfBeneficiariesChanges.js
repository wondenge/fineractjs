

import ApiClient from '../ApiClient';

/**
 * The PutSelfBeneficiariesChanges model module.
 * @module model/PutSelfBeneficiariesChanges
 * @version 1.0
 */
class PutSelfBeneficiariesChanges {
    /**
     * Constructs a new <code>PutSelfBeneficiariesChanges</code>.
     * @alias module:model/PutSelfBeneficiariesChanges
     */
    constructor() { 
        
        PutSelfBeneficiariesChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfBeneficiariesChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfBeneficiariesChanges} obj Optional instance to populate.
     * @return {module:model/PutSelfBeneficiariesChanges} The populated <code>PutSelfBeneficiariesChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfBeneficiariesChanges();

            if (data.hasOwnProperty('transferLimit')) {
                obj['transferLimit'] = ApiClient.convertToType(data['transferLimit'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} transferLimit
 */
PutSelfBeneficiariesChanges.prototype['transferLimit'] = undefined;

/**
 * @member {String} name
 */
PutSelfBeneficiariesChanges.prototype['name'] = undefined;






export default PutSelfBeneficiariesChanges;

