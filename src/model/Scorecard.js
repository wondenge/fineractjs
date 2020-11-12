

import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import Client from './Client';
import Question from './Question';
import Response from './Response';
import Survey from './Survey';

/**
 * The Scorecard model module.
 * @module model/Scorecard
 * @version 1.0
 */
class Scorecard {
    /**
     * Constructs a new <code>Scorecard</code>.
     * @alias module:model/Scorecard
     */
    constructor() { 
        
        Scorecard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Scorecard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scorecard} obj Optional instance to populate.
     * @return {module:model/Scorecard} The populated <code>Scorecard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Scorecard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('survey')) {
                obj['survey'] = Survey.constructFromObject(data['survey']);
            }
            if (data.hasOwnProperty('question')) {
                obj['question'] = Question.constructFromObject(data['question']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = Response.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('appUser')) {
                obj['appUser'] = AppUser.constructFromObject(data['appUser']);
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = Client.constructFromObject(data['client']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
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
Scorecard.prototype['id'] = undefined;

/**
 * @member {module:model/Survey} survey
 */
Scorecard.prototype['survey'] = undefined;

/**
 * @member {module:model/Question} question
 */
Scorecard.prototype['question'] = undefined;

/**
 * @member {module:model/Response} response
 */
Scorecard.prototype['response'] = undefined;

/**
 * @member {module:model/AppUser} appUser
 */
Scorecard.prototype['appUser'] = undefined;

/**
 * @member {module:model/Client} client
 */
Scorecard.prototype['client'] = undefined;

/**
 * @member {Date} createdOn
 */
Scorecard.prototype['createdOn'] = undefined;

/**
 * @member {Number} value
 */
Scorecard.prototype['value'] = undefined;

/**
 * @member {Boolean} new
 */
Scorecard.prototype['new'] = undefined;






export default Scorecard;

