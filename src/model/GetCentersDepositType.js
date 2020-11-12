

import ApiClient from '../ApiClient';

/**
 * The GetCentersDepositType model module.
 * @module model/GetCentersDepositType
 * @version 1.0
 */
class GetCentersDepositType {
    /**
     * Constructs a new <code>GetCentersDepositType</code>.
     * @alias module:model/GetCentersDepositType
     */
    constructor() { 
        
        GetCentersDepositType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersDepositType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersDepositType} obj Optional instance to populate.
     * @return {module:model/GetCentersDepositType} The populated <code>GetCentersDepositType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersDepositType();

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
GetCentersDepositType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetCentersDepositType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetCentersDepositType.prototype['description'] = undefined;






export default GetCentersDepositType;

