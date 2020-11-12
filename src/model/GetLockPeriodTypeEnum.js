

import ApiClient from '../ApiClient';

/**
 * The GetLockPeriodTypeEnum model module.
 * @module model/GetLockPeriodTypeEnum
 * @version 1.0
 */
class GetLockPeriodTypeEnum {
    /**
     * Constructs a new <code>GetLockPeriodTypeEnum</code>.
     * @alias module:model/GetLockPeriodTypeEnum
     */
    constructor() { 
        
        GetLockPeriodTypeEnum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLockPeriodTypeEnum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLockPeriodTypeEnum} obj Optional instance to populate.
     * @return {module:model/GetLockPeriodTypeEnum} The populated <code>GetLockPeriodTypeEnum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLockPeriodTypeEnum();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
GetLockPeriodTypeEnum.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetLockPeriodTypeEnum.prototype['description'] = undefined;






export default GetLockPeriodTypeEnum;

