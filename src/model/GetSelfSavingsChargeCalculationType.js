  

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsChargeCalculationType model module.
 * @module model/GetSelfSavingsChargeCalculationType
 * @version 1.0
 */
class GetSelfSavingsChargeCalculationType {
    /**
     * Constructs a new <code>GetSelfSavingsChargeCalculationType</code>.
     * @alias module:model/GetSelfSavingsChargeCalculationType
     */
    constructor() { 
        
        GetSelfSavingsChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsChargeCalculationType} The populated <code>GetSelfSavingsChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsChargeCalculationType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsChargeCalculationType.prototype['description'] = undefined;






export default GetSelfSavingsChargeCalculationType;

