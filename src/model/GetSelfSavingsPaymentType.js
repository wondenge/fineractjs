

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsPaymentType model module.
 * @module model/GetSelfSavingsPaymentType
 * @version 1.0
 */
class GetSelfSavingsPaymentType {
    /**
     * Constructs a new <code>GetSelfSavingsPaymentType</code>.
     * @alias module:model/GetSelfSavingsPaymentType
     */
    constructor() { 
        
        GetSelfSavingsPaymentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsPaymentType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsPaymentType} The populated <code>GetSelfSavingsPaymentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsPaymentType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsPaymentType.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSelfSavingsPaymentType.prototype['name'] = undefined;






export default GetSelfSavingsPaymentType;

