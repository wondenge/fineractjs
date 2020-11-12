  

import ApiClient from '../ApiClient';
import Client from './Client';

/**
 * The AppUserClientMapping model module.
 * @module model/AppUserClientMapping
 * @version 1.0
 */
class AppUserClientMapping {
    /**
     * Constructs a new <code>AppUserClientMapping</code>.
     * @alias module:model/AppUserClientMapping
     */
    constructor() { 
        
        AppUserClientMapping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppUserClientMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppUserClientMapping} obj Optional instance to populate.
     * @return {module:model/AppUserClientMapping} The populated <code>AppUserClientMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppUserClientMapping();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = Client.constructFromObject(data['client']);
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
AppUserClientMapping.prototype['id'] = undefined;

/**
 * @member {module:model/Client} client
 */
AppUserClientMapping.prototype['client'] = undefined;

/**
 * @member {Boolean} new
 */
AppUserClientMapping.prototype['new'] = undefined;






export default AppUserClientMapping;

